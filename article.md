title: "Zdražování jako dodatečná daň: Jak se vaše osobní inflace liší od průměru?"
perex: "Průměrná inflace, o níž se dozvídáme a přemýšlíme nejčastěji, vystihuje skutečně zažívanou inflaci jen asi 60 % domácností. Čím rychleji ceny stoupají, tím víc je těch, kdo zdražování pociťují jinak. Na rodiny, které za energie a potraviny utratí největší část příjmů, může reálná inflace dopadnout podstatně tvrději než by odpovídalo už tak alarmujícímu průměru, který se nejčastěji objevuje v médiích."
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='https://ctk.cz'>ČTK</a>"
styles: ["https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"]
libraries: [] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)

---

Důchody, sociální dávky, regulované ceny, honoráře. Majetková vyrovnání, nájemné i platy. Všechno bývá v zákonech a smlouvách navázáno na _průměrnou_ míru inflace, jak ji [počítá a zveřejňuje Český statistický úřad](https://www.czso.cz/csu/czso/inflace_spotrebitelske_ceny).

Zleva i zprava přibývá ekonomů, kteří upozorňují, že podobně [jako u mezd](https://www.statistikaamy.cz/o-slozitem-jednoduse/ostre-sledovana-mzda-prumer-a-median/) i v případě inflace může být průměr zavádějící a dovést nás ke špatným rozhodnutím.

<wide>
<picture >
    <source srcset="https://data.irozhlas.cz/inflace/img/test-mob.svg" media="(max-width: 600px)">
    <img class="uzsi" src="https://data.irozhlas.cz/inflace/img/test-des.svg" loading="lazy" alt="graf1" />
</picture>
</wide>


>GRAF 1 [data](https://data.irozhlas.cz/inflace/data/grafy/graf1.xlsx)

>Jsou čtyři základní čísla, která se pravidelně objevují v souvislosti s inflací

>Všechna vyjadřují vážený průměr změn spotřebitelských cen. Liší se v tom, jaké období sledují a s jakým obdobím ho porovnávají.

>- Meziměsíční – Zvýšení nebo snížení průměrných cen v daném měsíci ve srovnání s předchozím měsícem. Nejvýraznější bývá zdražování v lednu, kdy vstupují v platnost nové ceníky, ale například i nové sazby daní.

>- Meziroční – Zvýšení nebo snížení průměrných cen v daném měsíci ve srovnání se stejným měsícem předchozího roku. Vylučuje sezónní výkyvy tím, že se porovnávají stejné měsíce.

>- Klouzavý průměr za 12 měsíců – Zvýšení nebo snížení průměrných cen za posledních 12 měsíců ve srovnání s průměrem předchozích 12 měsíců. Bere se v úvahu zejména při propočtech reálných mezd a důchodů.

>- Průměrná roční míra inflace. Číslo, které „vstupuje do historie“. Výsledek klouzavého průměru každý rok v prosinci. Slouží hlavně k porovnání dlouhých časových řad (1991 byla 56,6 %, 1993 20,8 %, 1998 10,7 %).

Pokud se vaše osobní spotřeba kryje s [průměrným spotřebním košem](https://www.czso.cz/csu/czso/spotrebni_kos_archiv), mohli jste si v roce 2021 za stejné peníze koupit o 3,8 procenta míň věcí a služeb než v prvním roce pandemie – [pokud měli v obchodech otevřeno](https://www.czso.cz/csu/czso/metodicke-poznamky-k-indexu-spotrebitelskych-cen-covid-19).

Bylo už i hůř. V transformačním roce 1991, poté co stát přestal většinu cen diktovat a nechal je psát rukou trhu, stoupla cenová hladina za rok víc než o polovinu.

Co dělá i zdánlivě mírná inflace dlouhodobě pro vaše úspory, si můžete ověřit v kalkulačce (zadané údaje se nikam neukládají):
<div id="kalkulacka"></div>

## Inflace jako mocenský boj?

Mezi ekonomy ovšem přibývá těch, kdo tradiční způsob měření inflace kritizují: „Index spotřebních cen zachycuje pouze část poklesu kupní síly a není příliš vypovídající,“ [řekl například v časopisu Finmag](https://finmag.penize.cz/penize/428339-co-s-volnym-milionem-boj-s-inflaci-ocima-expertu) ekonom a propagátor kryptoměn Josef Tětek. Za lepší indikátor považuje růst [měnové zásoby M2](https://www.cnb.cz/cs/statistika/menova_bankovni_stat/narodni_stat_data/mp.htm), který napovídá, že centrální banka „tištěním“ peněz snížila hodnotu koruny za poslední rok o 7,3 procenta, tedy téměř dvojnásobně ve srovnání s oficiální mírou inflace.

Zprůměrovaný index nepopisuje věrně realitu ani [podle Michala Skořepy z České spořitelny](https://video.aktualne.cz/dvtv/skorepa-zchudneme-skoro-vsichni-domacnosti-by-mely-zacit-spo/r~a729efac8ddf11ec9ba00cc47ab5f122/): „Záleží na tom, v jaké konkrétní životní stuaci jsme. Jaký máme spotřební koš. Ten rozhodně není pro nás pro všechny stejný. (...) Nejchudší domácnosti mají bohužel nejvyšší podíl potravin, proto budou na inflaci bity nejvíc.“

Z [výpočtů ekonomů z CERGE](https://pep.vse.cz/pdfs/pep/2016/01/05.pdf) vyplývá, že jen kolem 60 procent domácností je vystaveno cenovým nárůstům v podobné výši jako průměrná míra inflace. Navíc čím vyšší je průměrná inflace, tím menší procento domácností bylo vystaveno nárůstu cen blízko tomuto průměru.

„Po většinu sledovaného období (1995-2010) byly nízkopříjmové domácnosti a domácnosti důchodců vystaveny signifikantně vyšším nárůstům cen, než byla míra inflace,“ píší Pavel Hait a Petr Janský. Jejich práce vyšla před osmi lety, její závěry lze ovšem vztáhnout i na současné zdražování.

> GRAF2:
>
> buď reprezentativnost oficiální míry inflace z této práce, strana 9 (https://www.cerge-ei.cz/pdf/wp/Wp508.pdf)
> nebo ČSÚ celková inflace/domácnosti důchodců/pražské domácnosti

„Z dat vyplývá, že čím rychleji se mění průměrné ceny, tím různorodější inflace je,“ [ukazuje na sérii grafů](https://economicsfromthetopdown.com/2021/11/24/the-truth-about-inflation/) i kanadský politický ekonom Blair Fix. Inflace je podle něj mocenský boj o to, kdo dokáže ceny zvýšit nejrychleji – a to jsou podle něj obvykle velké firmy, které na zdražování vydělají ještě víc než zadlužené vlády.

## Od sunaru po kremaci

Číslo, které se pro vyjádření inflace nejčastěji používá, udává, o kolik se zvýšil vážený průměr cen zboží a služeb v typickém [spotřebním koši](https://www.czso.cz/csu/czso/spotrebni_kos_archiv). V tom českém nyní najdeme přes osm set položek („reprezentantů“) od kondomu, sušeného mléka a dětského míče až po poplatek za sepsání závěti a kremaci. Každá položka má přitom přesně stanovenou váhu: potraviny celkem 17,7 procenta, bydlení a energie 25 procent, vzdělávání půl procenta.

Statistici při tom vycházejí z [národních](https://www.czso.cz/documents/10180/24433595/32019814c05.pdf/a7e7254f-6289-4ce5-bc36-08060537db92?version=1.0) a [rodinných účtů](https://www.czso.cz/csu/vykazy/statistika_rodinnych_uctu), tedy z účetní databáze, která se snaží co nejvěrněji zachytit hospodářské transakce celé země a z podrobného výzkumu, při kterém si tři tisíce domácností zastupujících všechny společenské vrstvy zapisuje veškeré příjmy a výdaje do deníčků, které pak odevzdávají statistikům. Váha, kterou jednotlivým cenovým reprezentantům ve spotřebním koši přisuzují, odpovídá podílu tohoto typu útraty na celkové spotřebě domácností.

Tazatelky ([ČSÚ o nich referuje v ženském rodě](https://www.statistikaamy.cz/2015/02/22/inflace-jak-a-proc-se-v-cesku-pocita/)) potom zjišťují aktuální ceny. Buď zajdou a zavolají do některého z osmi a půl tisíce vytypovaných obchodů rozmístěných po celé republice, nebo se čím dál častěji podívají na internet. Případně automaticky zpracují [data z pokladen maloobchodních řetězců](https://www.statistikaamy.cz/2018/09/18/scanner-data-zvysuji-kvalitu-vypoctu-miry-inflace/).

[Systém je tedy mnohem propracovanější](https://www.czso.cz/documents/10180/26822363/manual_isc_2021.pdf/06963cd6-53d0-4b9b-9f7e-b7465060ff71?version=1.5) než před sto lety, kdy s ním Čechoslováci začínali. Tehdy sledovali vývoj cen 41 položek rozdělených jen do dvou skupin: 1. potraviny, palivo, petrolej, mýdlo; 2. látky, obuv, klobouky.

Přesto se stále hledá rovnováha mezi přesností a proveditelností: výdaje jednotlivých domácností se od sebe liší nejen tím, co nakupují, ale i kde. Například lidé, kteří nemají auto, bývají častěji odkázání na večerky, které jsou sice po ruce, ale ceny v nich bývají vyšší než v supermarketech či hypermarketech. Ceny se mohou lišit i podle síly místní konkurence, vzdálenosti od dodavatele nebo počtu obyvatel v obci. Do zveřejňovaných statistických výkazů se nicméně dostane u každé ceny každé položky opět průměr za jeden druh zboží a celou republiku.

>Graf 3: Spotřební koš tehdy a teď [data](https://data.irozhlas.cz/inflace/data/grafy/graf3.xlsx)

Složení statistického spotřebního koše se v čase i prostoru mění: v italském jsou zastoupeny jiné potraviny než v polském. Aby bylo možné inflaci srovnávat, zavedla Evropská unie [HICP, tedy Harmonizovaný index spotřebitelských cen](https://ec.europa.eu/eurostat/web/hicp), jehož výsledek se liší od národního výpočtu.

Jinak také vypadá současný český spotřební koš a ten z devadesátých let. V tom starém chybějí například přenosné počítače nebo účty za mobilní telefony.

Do spotřeby domácností se u nás nepočítá útrata v zahraničí, hypotéky, směnný obchod, hazardní hry, drogy – s výjimkou cigaret a alkoholu – ani prostituce. Průměrná útrata na osobu a rok pak [vychází zhruba na 150 tisíc korun](https://www.czso.cz/documents/10180/142681136/1600662112.pdf/09d4bc0d-e321-4b5a-b886-1105c9424ab6?version=1.3).

Aby byl výpočet aktuální, [mění se jednou za dva roky váhy položek ve spotřebním koši](https://www.czso.cz/csu/czso/spotrebni_kos_archiv). Jak jde čas, [mění se i výběr cenových reprezentantů](https://www.novinky.cz/ekonomika/clanek/tablet-digitalni-teplomer-nebo-kondomy-statistici-meni-seznamy-pro-vypocet-inflace-290296). Konečné rozhodnutí je v rukou statistického úřadu, který jej konzultuje s Poradní komisí pro statistiku spotřebitelských cen. Zasedají v ní zástupci ministerstev, národní banky, výzkumného ústavu práce a sociálních věcí, Vysoké školy ekonomické, odborových svazů, organizací důchodců a vybraných odborů „staťáku“.

## Luxusnější položky

Právě složení spotřebního koše totiž může výsledek výpočtu zásadně ovlivnit. Britská kuchařka Jack Monroe, která se zaměřuje na propagaci levných, zdravých a jednoduchých receptů, [upozorňuje](https://twitter.com/BootstrapCook/status/1483778776697909252), že zatímco ceny základních surovin jako je nejlevnější rýže nebo těstoviny se od loňska zvýšily několikanásobně, po zařazení luxusnějších položek, jejichž ceny spíše stagnují, vychází britská inflace na vcelku přijatelných 5 procent. Pro chudší lidi je ale daleko vyšší.

„Rozpaluje mě do běla, že cenové indexy, které se používají k těmto výpočtům, hrubě podceňují skutečné náklady, které v souvislosti s inflací pociťují ti nejchudší. (...) Systém, který používáme pro měření inflace je od základu chybný, zcela ignoruje realitu a SKUTEČNÉ zvýšení cen pro lidi s minimální mzdou, bez stálého zaměstnání, klienty potravinových bank a miliony dalších,“ [píše Monroe](https://twitter.com/BootstrapCook/status/1483778776697909252).

V Česku například cena za tukový rohlík překonala už loni na podzim magickou hranici 2 Kč a v některých obchodech se prodává i za 2,30 Kč. Ceny se zvyšují prakticky u všech druhů zboží. Nejvíce je to znát u margarinů, které některé obchody zdražily i o 10 Kč.

>Graf 4: Co ve spotřebním koši nejvíc zdražuje, co naopak zlevňuje ([box plot](https://i0.wp.com/economicsfromthetopdown.com/wp-content/uploads/2021/11/inflation_boxplot.png?w=723&ssl=1)?)

<div id="root"></div>


## Čím je inflace způsobená

Experti se většinou shodují, že současná česká inflace je způsobená kombinací domácích i celosvětových jevů. V Česku je hnána tzv. imputovaným nájemným, které zahrnuje ceny nových bytů a domů, náklady na jejich renovaci a údržbu ale i platbu za realitní zprostředkování. Ale také dlouhodobě nízkou nezaměstnaností, která vytváří tlak na růst mezd a až příliš rychlým hospodářským oživením po nejtvrdších lockdownech.

Zvyšující se úrokové sazby a posilující koruna naopak přispívají ke snižování inflace (levnější dovoz, slabší odbyt exportérů...).

Z celosvětových trendů nejvíc přispívá zdražení energií i surovin a poruchy ve výrobních a dodavatelských řetězcích.. „Mnohem víc lidí pracuje z domova, všichni potřebují lepší počítače (...) a všechny musel někdo dovézt k nim domů,“ [vysvětluje oceňovaná americká ekonomka](https://noahpinion.substack.com/p/interview-emi-nakamura-macroeconomist?utm_source=url) Emi Nakamura například nedostatek počítačových čipů. Podstatný je podle ní také přesun poptávky od služeb ke zboží: „Když nejdete do kanceláře, nekoupíte si cestou kafe, ani salát k obědu.“

Klasický pohled na znehodnocování peněz [formuloval v 60. letech Milton Friedman](https://miltonfriedman.hoover.org/internal/media/dispatcher/271018/full). Inflace je podle něj „vždy a všude peněžním jevem“, který vzniká, když centrální banky pouštějí do oběhu víc peněz, než by odpovídalo hodnotě toho, co ekonomika skutečně vyprodukuje.

Covidová inflace jeho teorii ilustuje jakoby názorně: opatření od nákupu vakcín po podporu restaurací, které v době lockdownu neměly z čeho platit zaměstnance ani nájmy, představují obrovské výdaje. Vlády si na ně musí půjčovat. Proti enormním výdajům stojí přiškrcené příjmy: celé segmenty hospodářství kvůli infekci prudce snížily výkon, případně se na čas úplně zastavily a přestaly tedy „vytvářet hodnoty“. Lépe situované domácnosti chtěly utratit nemalé úspory z doby předcovidové prosperity a neměly za co.

Vznikly tak neobyčejně prudké a těžko předvídatelné turbulence mezi nabídkou a poptávkou. Jedna cesta zpátky k rovnováze vede právě přes znehodnocení peněz: dlužníkům v čele s vládami se tím uleví, věřitelům a těm, kdo si místo dluhu vytvořili peněžní rezervy, naopak přitíží.

Zatímco někteří ekonomové jako Václav Klaus žijí ve Friedmanově světě dodnes, jiní jeho teorii podrobují kritice. Populární mezi nimi je aforismus profesora ekonomie z MIT Roberta Solowa: „Friedman musí pořád myslet na peněžní zásobu,“ [napsal](https://www.harvardsquarelibrary.org/biographies/robert-merton-solow/). „Já zase musím pořád myslet na sex, ale do vědecké práce to netahám.“

Podle [Narayana Kocherlakota](https://www.minneapolisfed.org/research/staff-reports/money-is-memory) zase „peníze jsou paměť". Pokud je to tak, inflace je zapomínání. Když  se sníží hodnota dolaru, zmenší se význam každé transakce uskutečněné v minulosti, [všímá si blogger Noah Smith](https://substack.com/profile/8243895-noah-smith).

## Nespravedlivá inflace

„Kéž by inflace byla tak jednoduchá, [jak si to představoval Friedman],“ [píše](https://economicsfromthetopdown.com/2021/11/24/the-truth-about-inflation/) kanadský již výše citovaný politický ekonom Blair Fix. „Může to být tak, že tištění peněz způsobuje vzestup cen. A nebo to může být tak, že stoupající ceny nutí lidi víc si půjčovat – a tím „vytvářet“ víc peněz.“

„Pokud se průměrná cena nemění, neznamená to, že se nemění ani jednotlivé ceny. Pokud se cenová hladina rozhoupe zároveň nahoru i dolů, průměrná cenová úroveň není příliš informativní, pokud není rovnou zavádějící.“

Klíčové podle něj je uvědomit si, že i když jedno číslo zveřejňované statistickým úřadem nebo centrální bankou k takovému chápání svádí, inflace není jednolitý jev: ve stejném období mohou jablka podražit o 5 %, cena elektřiny se zvýší o 50 %, ale cena dětského oblečení klesne o 20 %.

Kvůli obrovskému rozptylu hodnot cenových indexů (tím vyššímu, čím vyšší je průměrná inflace) je podle něj průměr nejen málo informativní, ale přímo zavádějící. Pomohlo by, kdyby statistický úřad a média zároveň s mírou inflace zveřejňovala [směrodatnou odchylku](https://cs.wikipedia.org/wiki/Sm%C4%9Brodatn%C3%A1_odchylka), tedy jak moc se liší inflace různých položek ve spotřebním koši.

>INTERAKTIVNO: Zjednodušená inflační kalkulačka

Neliší se jen cenové výkyvy, ale i spotřeba skledovaných statků. „Někteří z nás mají například kamna a přístup k palivovému dřevu,“ komentoval odlišné dopady zdražování energií Skořepa z České spořitelny. „Mnozí z nás zase vydávají toli za jiné věci – za kulturu, za cestování – že energie samotné mají v jejich rozpočtu menší podíl.“

Jak upozornil v 90. letech ekonom [Jonathan Nitzan](https://bnarchives.yorku.ca/207/) klíčové je všímat si při přemýšlení o inflaci právě těchto rozdílů: „Změna cen je vždy diferencovaná, to znamená, že má vítěze a poražené. Důsledkem toho je, že inflace není jen peněžním jevem. Inflace mění strukturu společnosti.“ Podle Nitzana jde o nejdůležitější vlastnost inflace, a zároveň o nejvíc opomíjenou.

>INTERAKTIVNO: Úplná inflační kalkulačka


## Nejen kolik to stojí, ale také kolik berete

Inflace netrápí všechny stejně. Zatímco většina Evropa či USA mají obavy [z největšího zdražování za nekolik dekád](https://www.ft.com/content/088d3368-bb8b-4ff3-9df7-a7680d4d81b2),Například [Japonsko se těší](https://www.ft.com/content/d7680c3c-0bea-4531-9154-ce291d5f9d77), že po třiceti letech nízké inflace konečně cenová hladina trochu poroste. Mírné znehodnocování peněz totiž v klasických představách promazává jako olej motor ekonomiky: dává lidem důvod volné peníze investovat, což vede k inovacím a ekonomickému růstu.

Japonská inflace se sice od konce loňského roku mírně zvyšuje, stále se však počítá jen v desetinách procent. Stejně jako ceny ovšem v Japonsku stagnují i mzdy, od roku 2000 se reálně zvýšily o 0,39 procenta, průměr vyspělých zemí v OECD je kolem 35 procent, v Česku to je dokonce 75 procent.

I v době covidu se u nás díky [nízké nezaměstnanost](https://www.irozhlas.cz/ekonomika/analyza-nizka-nezamestnanost-cesko-ekonomika_1802150700_pek) mzdy zvyšovaly rychleji než ceny. [Výjimkou bylo zatím jen druhé čtvrtletí 2020](https://www.statistikaamy.cz/2021/12/06/prumerne-mzdy), kdy ekonomiku naplno zasáhl šok z nejtvrdších opatření v době první vlny covidu a reálné mzdy poprvé od krizových let 2012 a 2013 mírně klesly. Na výsledky za poslední kvartál ještě čekáme, varováním do těch dalších může být Británie, která navzdory rovněž vysoké poptávce po pracovní síle [vykázala pokles reálných mezd o 0,8 procenta](https://www.ft.com/content/ae3dbaba-11a4-41b5-a408-9fac0c0457dc).

>Graf 5 Srovnání reálných mezd, důchodů a inflace 2000 - 2020

+ je to jen průměr
+ a co důchody?
- pan průměrný nakupuje?

„Inflace je opravdu zázrak. Stačí deset let pětiprocentní inflace a skoro padesát procent reálné hodnoty dluhu zmizí,“ [říká slovenský ekonom a finanční poradce Juraj Karpiš](https://www.youtube.com/watch?v=KL4b6NACoLE). Jediný, kdo podle něj může nakonec zaplatit rekordní deficity, je střední třída. „Ve finanční krizi se politici naučili, že řešení problémů je tisknout peníze, teď k tomu opět sáhli. (...) Když se jim to podaří držet v mírně vyšší inflaci, seberou si, co potřebují.“


Peníze jsou popletený Jánošík, který bere chudým, kteří chodí do práce, nemají vlastní nemovitost, nemají zlato, nemají akcie a dává to nám bohatým – nejsem extrémně bohatým, ale mám nějaké úspory a aktiva – a podporují ceny našich aktiv. Já jsem na pandemii relativně dobře vydělal a člověk, který chodí do práce a nemá žádná aktiva se teď diví, kolik stojí rohlík a kolik stojí mléko. Jediná rada pro něj je: Už včera měl jít za šéfem a říct si o mnohem vyšší plat.

Tím se ovšem roztáčí spirála, která převezmě původně zvenčí importované impulsy pro zdražování v podobě energetického šok a covidem narušebného globálního zásobování přenese přímo k základům českého hospodářství. Pokud se ji nepodaří včas zpomalit, hrozí stagflace, tedy situace, kdy znehodnocování peněz je rychlejší než hospodářský růst. Pak právě lidé mohou ztratit důvěru v hodnotu peněz a hledat za ně náhradu.

    Sure, inflation is wildly divergent in practice. But is it wildly divergent in theory?

The answer is overwhelmingly no. In economic theory, inflation is assumed to be uniform. But why would economists assume something so at odds with reality?

Here’s what I think is going on. I treat the ‘does-it-work-in-theory’ joke as a litmus test for ideology. It’s a test to see if someone elevates ideas above evidence. The more they do so, the less they are doing science and the more they are promulgating ideology. Apply this litmus test to mainstream economics, and you see that it is a secular priesthood masquerading as science.

Prognóza ČNB

PAQ IDEA zdražení domácnostem: https://idea.cerge-ei.cz/images/COVID/PAQ_Research/2135_Energie_v27.pdf

 Je ale potřeba vždy plánovat s očekáváním lidí a firem a sazby zvyšovat dřív než se inflace rozjede.


ČBA prognóza: https://cbaonline.cz/makroekonomicka-prognoza-cba-1q-2022

ČNB prognóza: https://www.cnb.cz/cs/menova-politika/prognoza/

Aby to fungovalo, musí centrální banka předběhnout inflační očekávání. Místo tištění peněz peníze ničit. DFáte úroky na 20 procent, vyvoláte obrovskou recesi.

And that’s not the only theoretical reason why price controls could exacerbate inflation. Many economists theorize that inflation is, at least sometimes, determined by people’s beliefs about monetary policy. If people think the government (especially the central bank) doesn’t care that much about fighting inflation, then they’ll raise prices now in anticipation of future cost increases, causing fear of inflation to become a self-fulfilling prophecy.

https://noahpinion.substack.com/p/why-price-controls-are-a-bad-tool?utm_source=url

"Když do světa nedostatku zboží naházíte peníze, nemůže to vyhřeznout nikde jinde než v cenách. (...)Pokud by měla inflace pokračovat tempem 4 nebo 5 procent, lidé přestanou důvěřovat měně jako uchovateli hodnoty. To je větší průšvih než nějaký dočasný nárůst cen energií," [komentoval to](https://open.spotify.com/episode/0WKKHYEFswUOCyujFeGQQJ?si=9w0ibiTzTMq6VAq5ECs8jQ) investor Daniel Drahotský, který vedl J&T.
