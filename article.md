title: "Popletený Jánošík, boj o moc i ztráta paměti. Inflace má spoustu jmen a ještě víc nepřátel. Spočítejte si, o kolik zdražil život právě vám"
perex: "Meziroční inflace dosáhla v lednu 9,9 % a byla tak nejvyšší od léta 1998. Ačkoliv ji statistici počítají stále důkladněji, vnímat ji jako jediné číslo platné pro celou společnost je zavádějící. A to paradoxně tím víc, čím vyšší to číslo je. Prozkoumejte s námi, jak zdražují (ale i zlevňují) jednotlivé sledované položky, kdo růst cen pociťuje nejbolestivěji a jak se do něj dále promítne válka."
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='https://ctk.cz'>ČTK</a>"
styles: ["https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap"]
libraries: [] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)

---

<div id="root"></div>

Ještě před měsícem analytici České národní banky předpovídali, že bude inflace [kulminovat na jaře](https://www.cnb.cz/cs/menova-politika/prognoza/) a v druhé polovině roku 2022 začne klesat k hodnotám, na které jsme byli posledních třináct let zvyklí. Ruská invaze na Ukrajinu podobný optimismus vyloučila.

„Dočasnost je dlouhodobější, než se původně zdálo,“ [řekl ve vysílání Českého rozhlasu](https://plus.rozhlas.cz/guverner-cnb-rusnok-v-pristim-roce-se-vratime-k-inflacnimu-cili-a-normalnim-8687433) guvernér České národní banky Jiří Rusnok.

Válečnými operacemi a sankcemi zvýšené ceny plynu, elektřiny či pohonných hmot se podle Rusnoka postupně promítnou do zdražování dalších výrobků a služeb a ceny už mnohdy zůstanou vysoké.

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/komodity-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/komodity-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>


Rusko před válkou dodávalo do Evropy téměř 40 procent spotřeby zemního plynu a čtvrtinu importované ropy. Zemní plyn se nepoužívá jen k produkci tepla a elektřiny, ale i při výrobě hnojiv, jejichž zvýšené ceny se mohou projevit v cenách zemědělských výrobků.

Ukrajina je transportní uzel pro zmíněné suroviny, ale také světově významý exportér obilovin, rostlinného oleje, oceli nebo například neonu, používaného při výrobě procesorů.

Není tedy divu, že mnohé komodity po napadení Ukrajiny Ruskem začaly ještě víc zdražovat. Ceny ropy a zemního plynu se přiblížily historickým maximům.

„Centrální banky se obávají, že dočasné, pandemií vyvolané poruchy v dodávkách zboží a surovin mohou (kvůli válce – pozn. red.) přerůst v samoudržující se cyklus trvale vyšší inflace,“ [napsaly](https://www.ft.com/content/615b5680-5206-48de-ab08-83ee62daf149) v redakčním komentáři britské Financial Times. Situace podle nich připomíná začátek 70. let, kdy [Jomkipurská válka](https://cs.wikipedia.org/wiki/Jomkipursk%C3%A1_v%C3%A1lka) rozdmýchala již existující tendence ke znehodnocování peněz a způsobila v západních zemích stagflaci, tedy období úpadku, kdy byla inflace rychlejší než hospodářský růst, a lidé proto zchudli.

## Zavádějící průměr

Stát nesleduje ceny v obchodech jen tak pro zajímavost. Na _průměrnou_ míru inflace, jak ji z indexů spotřebitelských cen [počítá a zveřejňuje Český statistický úřad](https://www.czso.cz/csu/czso/inflace_spotrebitelske_ceny), bývají v zákonech a smlouvách navázané důchody, sociální dávky, regulované ceny, honoráře, majetková vyrovnání, nájemné i platy.

Pokud se vaše osobní spotřeba kryje s [průměrným spotřebním košem](https://www.czso.cz/csu/czso/spotrebni_kos_archiv), mohli jste si v roce 2021 za stejné peníze koupit o 3,8 procenta míň věcí a služeb než v prvním roce pandemie – [pokud měli v obchodech otevřeno](https://www.czso.cz/csu/czso/metodicke-poznamky-k-indexu-spotrebitelskych-cen-covid-19).

Bylo už i hůř. V transformačním roce 1991, poté co stát přestal většinu cen diktovat a nechal je psát rukou trhu, stoupla cenová hladina za rok víc než o polovinu.

<!--
TODO aby se mohl široký obrázek na mobilu scrollovat-->

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/test-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/test-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>

Co s vašimi penězi po několika letech udělá i zdánlivě mírná inflace v centrální bankou tolerovaném rozmezí 1 až 3 procenta ročně, si můžete ověřit v jednoduché kalkulačce (zadané údaje se nikam neukládají):

<div id="kalkulacka"></div>

>GRAF 1 [data](https://data.irozhlas.cz/inflace/data/grafy/graf1.xlsx)

>V souvislosti s inflací se pravidelně objevují čtyři základní ukazatele.

>Všechna vyjadřují vážený průměr změn spotřebitelských cen. Liší se v tom, jaké období sledují a s jakým obdobím ho porovnávají.

>- Meziměsíční – Zvýšení nebo snížení průměrných cen v daném měsíci ve srovnání s předchozím měsícem. Nejvýraznější bývá zdražování v lednu, kdy vstupují v platnost nové ceníky nebo nové sazby daní.

>- Meziroční – Zvýšení nebo snížení průměrných cen v daném měsíci ve srovnání se stejným měsícem předchozího roku. Porovnáním stejných měsíců se vylučují sezónní výkyvy.

>- Klouzavý průměr za 12 měsíců – Zvýšení nebo snížení průměrných cen za posledních 12 měsíců ve srovnání s 12 měsíci, které tomuto období předcházely. Bere se v úvahu zejména při propočtech reálných mezd a důchodů.

>- Průměrná roční míra inflace – Číslo, které „vstupuje do historie“. Jde o výsledek klouzavého průměru každý rok v prosinci. Slouží hlavně k porovnání dlouhých časových řad (1991 byla 56,6 %, 1993 20,8 %, 1998 10,7 %).

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/typy-inflaci-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/typy-inflaci-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>

Zleva i zprava přibývá ekonomů upozorňujících, že podobně [jako u mezd](https://www.statistikaamy.cz/o-slozitem-jednoduse/ostre-sledovana-mzda-prumer-a-median/) může být i v případě inflace průměr zavádějící a vést ke špatným rozhodnutím.

„Index spotřebních cen zachycuje pouze část poklesu kupní síly a není příliš vypovídající,“ [řekl například na webu Finmag](https://finmag.penize.cz/penize/428339-co-s-volnym-milionem-boj-s-inflaci-ocima-expertu) ekonom a propagátor kryptoměn Josef Tětek. Za lepší indikátor považuje růst [měnové zásoby M2](https://www.cnb.cz/cs/statistika/menova_bankovni_stat/narodni_stat_data/mp.htm), který napovídá, že centrální banka „tištěním“ peněz snížila hodnotu koruny za poslední rok o 7,3 procenta, tedy téměř dvojnásobně ve srovnání s oficiální mírou inflace.

Zprůměrovaný index nepopisuje realitu věrně ani podle Michala Skořepy z České spořitelny: „Záleží na tom, v jaké konkrétní životní stuaci jsme. Jaký máme spotřební koš. Ten rozhodně není pro všechny stejný. (…) Nejchudší domácnosti mají bohužel nejvyšší podíl potravin, proto budou na inflaci bity nejvíc,“ [řekl v DVTV](https://video.aktualne.cz/dvtv/skorepa-zchudneme-skoro-vsichni-domacnosti-by-mely-zacit-spo/r~a729efac8ddf11ec9ba00cc47ab5f122/).

Opačným příkladem může být člověk, který má fotovoltaickou elektrárnu nebo vlastní les jako zdroj palivového dřeva a doma kamna s výměníkem: zdražování energií se ho tolik nedotkne.

## Inflace jako mocenský boj

Z [výpočtů ekonomů z CERGE](https://pep.vse.cz/pdfs/pep/2016/01/05.pdf) vyplývá, že jen kolem 60 procent domácností je vystaveno cenovým nárůstům v podobné výši jako průměrná míra inflace. Navíc čím vyšší je průměrná inflace, tím menší procento domácností bylo vystaveno nárůstu cen blízko tomuto průměru.

„Po většinu sledovaného období (1995-2010 – pozn. red.) byly nízkopříjmové domácnosti a domácnosti důchodců vystaveny signifikantně vyšším nárůstům cen, než byla míra inflace,“ píší Pavel Hait a Petr Janský. Jejich práce vyšla před osmi lety, závěry lze ovšem vztáhnout i na současné zdražování.

> GRAF2: reprezentativnost oficiální míry inflace z této práce? strana 9 (https://www.cerge-ei.cz/pdf/wp/Wp508.pdf)

„Z dat vyplývá, že čím rychleji se mění průměrné ceny, tím různorodější inflace je,“ [ukazuje na sérii grafů](https://economicsfromthetopdown.com/2021/11/24/the-truth-about-inflation/) i kanadský politický ekonom Blair Fix. Inflace je podle něj mocenským bojem o to, kdo dokáže ceny zvýšit nejrychleji – a to jsou podle něj obvykle velké firmy. Na zdražování tak mohou vydělat ještě víc než zadlužené vlády, jejichž reálný dluh se znehodnocováním peněz snižuje.

## Od sunaru po kremaci

Číslo, které se pro vyjádření inflace nejčastěji používá, udává navýšení váženého průměru cen zboží a služeb v typickém [spotřebním koši](https://www.czso.cz/csu/czso/spotrebni_kos_archiv). V tom českém najdeme přes osm set položek („reprezentantů“) od kondomu, sušeného mléka a dětského míče až po poplatek za sepsání závěti a kremaci. Každá položka má přitom přesně stanovenou váhu: potraviny celkem 17,7 procenta, bydlení a energie 25 procent, vzdělávání půl procenta.

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/spotrebni-kos-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/spotrebni-kos-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>

Statistici při tom vycházejí z [národních účtů](https://www.czso.cz/documents/10180/24433595/32019814c05.pdf/a7e7254f-6289-4ce5-bc36-08060537db92?version=1.0), tedy z databáze, která se snaží zaúčtovat hospodářské transakce celé země. Údaje doplňují statistikou [rodinných účtů](https://www.czso.cz/csu/vykazy/statistika_rodinnych_uctu), výzkumem, při kterém si tři tisíce domácností zastupujících všechny společenské vrstvy zapisují do deníčků veškeré příjmy a výdaje. Váha, kterou jednotlivým cenovým reprezentantům ve spotřebním koši přisuzují, odpovídá podílu daného typu útraty na celkové spotřebě domácností.

Tazatelky ([ČSÚ o nich referuje v ženském rodě](https://www.statistikaamy.cz/2015/02/22/inflace-jak-a-proc-se-v-cesku-pocita/)) potom zjišťují aktuální ceny. Buď zajdou do některého z osmi a půl tisíce vytipovaných obchodů rozmístěných po celé republice, nebo se čím dál častěji podívají na internet. Případně automaticky zpracují [data z pokladen maloobchodních řetězců](https://www.statistikaamy.cz/2018/09/18/scanner-data-zvysuji-kvalitu-vypoctu-miry-inflace/).

[Systém je tedy mnohem propracovanější](https://www.czso.cz/documents/10180/26822363/manual_isc_2021.pdf/06963cd6-53d0-4b9b-9f7e-b7465060ff71?version=1.5) než před sto lety, kdy s ním Čechoslováci začínali. Tehdy sledovali vývoj cen 41 položek rozdělených jen do dvou skupin:

1. potraviny, palivo, petrolej, mýdlo,
2. látky, obuv, klobouky.

Přesto se stále hledá rovnováha mezi přesností a proveditelností. Například ceny na internetu [mohou být](https://www.nytimes.com/2022/02/26/technology/amazon-price-swings-shopping.html) pro každého uživatele každou chvíli jiné. Výdaje jednotlivých domácností se od sebe liší nejen tím, co nakupují, ale i kde. Například rodiny bez auta bývají častěji odkázané na večerky, které jsou sice po ruce, ale ceny v nich bývají vyšší než v supermarketech či hypermarketech.

Ceny se mohou lišit i podle síly místní konkurence, vzdálenosti od dodavatele nebo počtu obyvatel v obci. Do zveřejňovaných statistických výkazů se nicméně dostane opět průměr zjištěných cen za celou republiku.

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/spotrebni-kos-porovnani-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/spotrebni-kos-porovnani-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>

Složení statistického spotřebního koše se v čase i prostoru mění: v italském jsou zastoupeny jiné potraviny než v polském. Aby bylo možné inflaci srovnávat, zavedla Evropská unie [harmonizovaný index spotřebitelských cen](https://ec.europa.eu/eurostat/web/hicp) (HICP), jehož výsledek se liší od národního výpočtu.

Jinak také vypadá současný český spotřební koš a ten z devadesátých let. V tom starém chybějí například přenosné počítače nebo účty za mobilní telefony.

Do spotřeby domácností se u nás nepočítá útrata v zahraničí, hypotéky, směnný obchod, hazardní hry nebo drogy, s výjimkou cigaret a alkoholu. Průměrná útrata na osobu a rok pak [vychází zhruba na 150 tisíc korun](https://www.czso.cz/documents/10180/142681136/1600662112.pdf/09d4bc0d-e321-4b5a-b886-1105c9424ab6?version=1.3).

Aby byl výpočet aktuální, [mění se jednou za dva roky váhy položek ve spotřebním koši](https://www.czso.cz/csu/czso/spotrebni_kos_archiv). Jak jde čas, [mění se i výběr cenových reprezentantů](https://www.novinky.cz/ekonomika/clanek/tablet-digitalni-teplomer-nebo-kondomy-statistici-meni-seznamy-pro-vypocet-inflace-290296). Konečné rozhodnutí je v rukou statistického úřadu, který jej konzultuje s Poradní komisí pro statistiku spotřebitelských cen. Zasedají v ní zástupci ministerstev, národní banky, výzkumného ústavu práce a sociálních věcí, Vysoké školy ekonomické, odborových svazů, organizací důchodců a vybraných odborů „staťáku“.

## Luxusnější položky

Právě složení spotřebního koše může výsledek výpočtu zásadně ovlivnit. Britská publicistka a aktivistka Jack Monroe [upozorňuje](https://twitter.com/BootstrapCook/status/1483778776697909252), že zatímco ceny nejlevnější rýže nebo těstovin se od loňska zvýšily i víc než dvakrát, po zařazení luxusnějších surovin, jejichž ceny spíše stagnují, vychází britská inflace na vcelku přijatelných 5 procent. Pro chudší lidi je ale daleko vyšší.

„Rozpaluje mě do běla, že cenové indexy používané k těmto výpočtům hrubě podceňují skutečné náklady, které v souvislosti s inflací pociťují ti nejchudší. (…) Náš způsob měření inflace je od základu chybný, zcela ignoruje realitu a skutečné zvyšování cen pro lidi s minimální mzdou, bez stálého zaměstnání, klienty potravinových bank a miliony dalších,“ [píše Monroe](https://twitter.com/BootstrapCook/status/1483778776697909252).

V Česku například cena za tukový rohlík překonala už loni na podzim magickou hranici 2 Kč a v některých obchodech se prodává i za 2,30 Kč. Ceny se zvyšují prakticky u všech druhů zboží. Nejvíce je to znát u margarinů, které některé obchody zdražily i o 10 Kč.

Vedle energií a potravin pohání českou inflaci tzv. imputované nájemné. Do něj se počítají ceny nových bytů a domů, náklady na jejich renovaci a údržbu nebo poplatky realitním kancelářím. Vzhledem k rekordním cenám nemovitostí to má na výslednou inflaci značný vliv. Mezi experty se dlouhodobě [vede spor, zda by se měly tyto položky počítat do spotřeby, nebo jestli nejde spíš o investice](https://www.hypoindex.cz/clanky/chceme-nizsi-inflaci-imputujme-imputovane-najemne/).

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/porovnani-cen-1-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/porovnani-cen-1-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>

>INTERAKTIVNO: Úplná inflační kalkulačka


## Ztráta paměti i přeformátování společnosti

Klasický pohled na znehodnocování peněz [formuloval v 60. letech Milton Friedman](https://miltonfriedman.hoover.org/internal/media/dispatcher/271018/full). Inflace je podle něj „vždy a všude peněžním jevem“, který vzniká, když centrální banky pouštějí do oběhu víc peněz, než by odpovídalo hodnotě toho, co ekonomika skutečně vyprodukuje.

Covidová inflace jeho teorii ilustuje názorně: opatření od nákupu vakcín po podporu restaurací, které v době lockdownu neměly z čeho platit zaměstnance ani nájmy, představovaly obrovské výdaje. Vlády si na ně musely půjčovat.

Proti enormním výdajům stojí přiškrcené příjmy: celé segmenty hospodářství kvůli pandemii prudce snížily výkon, případně se na čas úplně zastavily a přestaly tedy „vytvářet hodnoty“.

Lépe situované domácnosti chtěly utráce úspory z doby předcovidové prosperity, ale neměly za co. Vznikly tak a těžko předvídatelné turbulence mezi nabídkou a poptávkou.

Jedna cesta zpátky k rovnováze vede právě přes znehodnocení peněz. Dlužníkům v čele s vládami se tím uleví, věřitelům a těm, kdo si místo dluhu vytvořili peněžní rezervy, naopak přitíží.

Zatímco někteří ekonomové žijí ve Friedmanově světě dodnes, jiní jeho teorii podrobují kritice. Viz aforismus profesora ekonomie z MIT Roberta Solowa: „Friedman musí pořád myslet na peněžní zásobu,“ [napsal](https://www.harvardsquarelibrary.org/biographies/robert-merton-solow/). „Já zase musím pořád myslet na sex, ale do vědecké práce to netahám.“

Ekonom [Narayan Kocherlakot](https://www.minneapolisfed.org/research/staff-reports/money-is-memory) zase říká, že „peníze jsou paměť“. Pokud je to tak, inflace je obdobou zapomínání. Když se sníží hodnota měny, zmenší se význam každé transakce uskutečněné v minulosti, [všímá si blogger Noah Smith](https://substack.com/profile/8243895-noah-smith).

## Nespravedlivá inflace

„Kéž by inflace byla tak jednoduchá, [jak si to představoval Friedman],“ [píše](https://economicsfromthetopdown.com/2021/11/24/the-truth-about-inflation/) výše citovaný politický ekonom Blair Fix. „Může to být tak, že tištění peněz způsobuje vzestup cen. A nebo to může být tak, že stoupající ceny nutí lidi víc si půjčovat – a tím ,vytvářet' víc peněz.“

„Pokud se průměrná cena nemění, neznamená to, že se nemění ani jednotlivé ceny. Pokud se cenová hladina rozhoupe zároveň nahoru i dolů, průměrná cenová úroveň není příliš informativní, ba může být až zavádějící.“

Klíčové je podle něj uvědomit si, že inflace není jednolitý jev, ačkoliv jedno číslo zveřejňované statistickým úřadem nebo centrální bankou k takovému chápání svádí. Ve stejném období mohou jablka podražit o 5 %, cena elektřiny se zvýší o 50 %, zato cena dětského oblečení klesne o 20 %.

Při obrovském rozptylu hodnot cenových indexů by pomohlo, kdyby statistický úřad a média zároveň s mírou inflace zveřejňovala [směrodatnou odchylku](https://cs.wikipedia.org/wiki/Sm%C4%9Brodatn%C3%A1_odchylka), tedy jak moc se liší inflace různých položek ve spotřebním koši.

Jak v 90. letech upozornil ekonom [Jonathan Nitzan](https://bnarchives.yorku.ca/207/) při přemýšlení o inflaci je klíčové si všímat právě takových rozdílů: „Změna cen je vždy diferencovaná, to znamená, že má vítěze a poražené. Důsledkem toho je, že inflace není jen peněžním jevem. Inflace mění strukturu společnosti.“ Podle Nitzana jde o nejdůležitější vlastnost inflace, a zároveň o nejvíc opomíjenou.

## Nejen kolik to stojí, ale také kolik berete

Inflace netrápí všechny stejně. Zatímco Evropa či USA mají obavy [z největšího zdražování za nekolik dekád](https://www.ft.com/content/088d3368-bb8b-4ff3-9df7-a7680d4d81b2), [Japonsko se těší](https://www.ft.com/content/d7680c3c-0bea-4531-9154-ce291d5f9d77), že po třiceti letech nízké inflace konečně cenová hladina trochu roste. Mírné znehodnocování peněz totiž v klasických představách promazává soukolí ekonomiky: dává lidem důvod volné peníze investovat, což vede k inovacím a ekonomickému růstu.

Japonská inflace se sice od konce loňského roku mírně zvyšuje, stále se však počítá jen v desetinách procent. Stejně jako ceny ovšem v Japonsku stagnují i mzdy. Od roku 2000 se reálně zvýšily o 0,39 procenta, průměr vyspělých zemí v OECD je kolem 35 procent. V Česku to je dokonce 75 procent.

I v době covidu se u nás díky [nízké nezaměstnanosti](https://www.irozhlas.cz/ekonomika/analyza-nizka-nezamestnanost-cesko-ekonomika_1802150700_pek) mzdy zvyšovaly rychleji než ceny. [Výjimkou bylo zatím jen druhé čtvrtletí roku 2020](https://www.statistikaamy.cz/2021/12/06/prumerne-mzdy), kdy ekonomiku naplno zasáhl šok z nejtvrdších opatření v době první vlny covidu a reálné mzdy poprvé od krizových let 2012 a 2013 mírně klesly. Na výsledky za poslední kvartál ještě čekáme. Varováním do těch dalších může být Británie, která navzdory vysoké poptávce po pracovní síle [vykázala pokles reálných mezd o 0,8 procenta](https://www.ft.com/content/ae3dbaba-11a4-41b5-a408-9fac0c0457dc).

<!-- TODO data pro reálné mzdy-->
<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/mzdy-duchody-inflace-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/mzdy-duchody-inflace-des.svg" loading="lazy" alt="graf mzdy důchody inflace" />
</picture>
</wide>

„Inflace je opravdu zázrak. Stačí deset let pětiprocentní inflace a skoro padesát procent reálné hodnoty dluhu zmizí,“ [říká slovenský ekonom a finanční poradce Juraj Karpiš](https://www.youtube.com/watch?v=KL4b6NACoLE). Jediný, kdo podle něj může nakonec zaplatit rekordní deficity, je střední třída. „Ve finanční krizi se politici naučili, že řešení problémů je tisknout peníze, teď k tomu opět sáhli. (…) Když se jim to podaří držet v mírně vyšší inflaci, seberou si, co potřebují.“ Peníze jsou podle něj popletený Jánošík, který bere chudým a dává bohatým, kteří dokázali finanční rezervy investovat.

Podobně to vidí guvernér ČNB Rusnok: „Inflace nás všechny vlastně zdaňuje. A zdaňuje nás tak, že o tom nehlasoval žádný parlament, nebyla o tom volební kampaň. Jednak nám bere úspory, jednak ,zdaňuje' reálnou kupní silou obyvatelstva. Čili i ti, kteří žádné úspory nemají a jakoby nemají co ztratit, takto ztrácejí kupní sílu. A to je velmi závažný společenský a sociální fenomén,“ řekl v rozhovoru pro Český rozhlas.

Podle [studie PAQ Research](https://idea.cerge-ei.cz/images/COVID/PAQ_Research/2135_Energie_v27.pdf) z konce loňského roku, kdy ještě nebylo možné do zdražení energií započíst válku na Ukrajině, bude letos nejchudší pětina domácností dávat za bydlení víc než dvě třetiny rozpočtu. U pětiny nejbohatších domácností to mělo být v průmětu 18 procent. Vyrovnat tento nepoměr by podle autorů studie měl nový způsob výpočtu příspěvku na bydlení.

Výraznější roli státu při mírnění dopadů inflace prosazují v [redakčním komentáři](https://www.ft.com/content/615b5680-5206-48de-ab08-83ee62daf149) i již citované Financial Times: „Nakonec to bude rozpočtová politika vlád, která bude muset ochránit před následky vysokých cen ty nejzranitelnější. Rozhodnutí vlád nedokáže snížit ceny surovin. Může ale zajistit, že náklady ponese celá společnost rovným dílem, místo aby nechala hladovět jen některé, až na ně v plné síle dopadne kombinované zdražení jídla a energií.“
