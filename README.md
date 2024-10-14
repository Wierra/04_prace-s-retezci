# 04_prace-s-retezci

## Vlastnosti a metody
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

1. Vypište do stránky počet znaků názvu.
2. Vypište název filmu převedený na velká písmena.
3. Vypište z názvu prvních pět písmen.
4. Vypište z názvu posledních pět písmen.

## E-maily
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

        jmeno.prijmeni@domena

Tedy například:

- petr.novak@gmail.com
- romana.nejedla@czechitas.cz
- slavomir.ponuchalek@yahoo.com

Postupujte dle následujících kroků.

1. Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
2. Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
3. Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
4. Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
5. Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
        const parsedEmail = {
        userName: 'slavomir.ponuchalek',
        domain: 'yahoo.com',
        };

7. Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.


## Doručování
Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

1. Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující 2. HTML ve formátu jako níže
        <address>
        <p>Pod Stájemi 67</p>
        <p>12754 Klysnov</p>
        </address>
3. Pomocí document.body.innerHTML vložte sestavené HTML do stránky.