

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 

public class SuperHeroi {

    private id;
    private energia = 1;
    private forca = 1;
    public nome;
    public poderEspecial;
    public origem;

    function __construct($nome, $poderEspecial, $origem) {
        print "In BaseClass constructor\n";
    }

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getEnergia() {
        return $this->energia;
    }

    public function setEnergia($energia) {
        $this->energia = $energia;
    }
    
    public function getForca() {
        return $this->forca;
    }

    public function setForca($forca) {
        $this->forca = $forca;
    }


    public aumentarEnergia($RA) {
       return $this->setEnergia($this->forca * strlen($RA));
    }

    public calcularPoderMedio() {
        return $this->energia / $this->forca;
    }
}

SuperHeroi super1 = new Super("Harry Potter", "Expecto Patronus", "Warner");
echo super1;
?>
</body>
</html>

