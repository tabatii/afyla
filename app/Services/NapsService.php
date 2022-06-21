<?php

namespace App\Services;

class NapsService
{

    private $url = 'https://pa2.naps.ma:8441/GW_PAIEMENT/faces/vues/paiement/gatenaps.xhtml';
    private $lang = 'F';

    private $cmr;
    private $gal;
    private $public;
    private $private;

    public function __construct(string $cmr, string $gal)
    {
        $this->cmr = $cmr;
        $this->gal = $gal;
    }

    public function setDefaultUrl(string $url)
    {
        $this->url = $url;
    }

    public function setDefaultLang(string $lang)
    {
        $this->lang = $lang;
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

    public function encrypt(array $data)
    {
        $this->checkPublicKey();
        return [
            'data1' => $this->data1($data),
            'data2' => $this->data2($data),
            'data3' => $this->data3($data),
            'data4' => $this->data4($data),
        ];
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

    public function generate(array $encrypted)
    {
        $query = http_build_query([
            'data1' => $encrypted['data1'],
            'data2' => $encrypted['data2'],
            'data3' => $encrypted['data3'],
            'data4' => $encrypted['data4'],
            'cmr' => $this->cmr,
            'gal' => $this->gal,
        ]);
        return $this->url.'?'.$query;
    }

    private function checkPublicKey()
    {
        if ($this->public === null) {
            throw new \Exception('No public key provided.');
        } elseif ($this->public === false) {
            throw new \Exception('Unable to get public key for encryption.');
        }
    }

    private function checkPrivateKey()
    {
        if ($this->private === null) {
            throw new \Exception('No private key provided.');
        } elseif ($this->private === false) {
            throw new \Exception('Unable to get private key for encryption.');
        }
    }

    private function data1(array $data)
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

    private function data2(array $data)
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

    private function data3(array $data)
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

    private function data4(array $data)
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
}
