<?php

namespace App\Services;

class NapsService
{

    private $cmr;
    private $gal;
    private $public;
    private $private;

    private $url;
    private $lang;

    public function __construct(string $cmr, string $gal, string $lang = null, string $url = null)
    {
        $this->url = $url ?? 'https://pa2.naps.ma:8441/GW_PAIEMENT/faces/vues/paiement/gatenaps.xhtml';
        $this->lang = $lang ?? 'F';
        $this->cmr = $cmr;
        $this->gal = $gal;
    }

    public function checkPublicKey()
    {
        if ($this->public === null) {
            throw new \Exception('No public key provided.');
        } elseif ($this->public === false) {
            throw new \Exception('Unable to get public key for encryption.');
        }
    }

    public function checkPrivateKey()
    {
        if ($this->private === null) {
            throw new \Exception('No private key provided.');
        } elseif ($this->private === false) {
            throw new \Exception('Unable to get private key for encryption.');
        }
    }

    public function setPublicKey(string $key)
    {
        $public = "-----BEGIN PUBLIC KEY-----"."\n";
        $public .= $key."\n";
        $public .= "-----END PUBLIC KEY-----";
        $this->public = openssl_pkey_get_public($public);
    }

    public function setPrivateKey(string $key)
    {
        $private = "-----BEGIN RSA PRIVATE KEY-----"."\n";
        $private .= $key."\n";
        $private .= "-----END RSA PRIVATE KEY-----";
        $this->private = openssl_pkey_get_private($private);
    }

    public function encrypt(int $step, array $data)
    {
        $method = 'step'.$step;
        $this->checkPublicKey();
        return $this->$method($data);
    }

    public function step1(array $data)
    {
        $array = [
            'nomprenom='.$data['fullname'],
            'idcommande='.$data['orderID'],
            'montant='.$data['price'],
            'email='.$data['email'],
            'langue='.$this->lang,
            'detailoperation='.$data['details'],
            'fin1',
        ];

        $query = implode('&', $array);
        if (openssl_public_encrypt($query, $encrypted, $this->public)) {
            return base64_encode($encrypted);
        }

        throw new \Exception('Encryption failed.');
    }

    public function step2(array $data)
    {
        $array = [
            'successURL='.$data['successURL'],
            'timeoutURL='.$data['timeoutURL'],
            'fin2',
        ];

        $query = implode('&', $array);
        if (openssl_public_encrypt($query, $encrypted, $this->public)) {
            return base64_encode($encrypted);
        }

        throw new \Exception('Encryption failed.');
    }

    public function step3(array $data)
    {
        $array = [
            'failURL='.$data['failURL'],
            'recallURL='.$data['recallURL'],
            'fin3',
        ];

        $query = implode('&', $array);
        if (openssl_public_encrypt($query, $encrypted, $this->public)) {
            return base64_encode($encrypted);
        }

        throw new \Exception('Encryption failed.');
    }

    public function step4(array $data)
    {
        $array = [
            'tel='.$data['phone'],
            'address='.$data['street'],
            'city='.$data['city'],
            'state='.$data['state'],
            'country='.$data['country'],
            'postcode='.$data['zip'],
            'fin4',
        ];

        $query = implode('&', $array);
        if (openssl_public_encrypt($query, $encrypted, $this->public)) {
            return base64_encode($encrypted);
        }

        throw new \Exception('Encryption failed.');
    }

    public function decrypt(string $data)
    {
        $this->checkPrivateKey();

        $data = str_replace(' ', '+', $data);
        $data = base64_decode($data);
        if (openssl_private_decrypt($data, $decrypted, $this->private)) {
            return $decrypted;
        }

        throw new \Exception('Decryption failed.');
    }

    public function generate(string $one, string $two, string $three, string $four)
    {
        $query = http_build_query([
            'data1' => $one,
            'data2' => $two,
            'data3' => $three,
            'data4' => $four,
            'cmr' => $this->cmr,
            'gal' => $this->gal,
        ]);
        return $this->url.'?'.$query;
    }
}
