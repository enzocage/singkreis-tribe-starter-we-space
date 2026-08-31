const fs = require('fs');
const path = require('path');

const rawText = `[0634](https://heilsame-lieder.de/?q=0634)
Om Ami Dewa Hrih (Amitabha Mantra)
[Krishna Das](https://krishnadas.com/)
[0633](https://heilsame-lieder.de/?q=0633)
Something Will Grow
[Monika Hollmann](https://herzensgesang.de/)
[0632](https://heilsame-lieder.de/?q=0632)
May There Always Be Angels
[Katharina Bossinger](https://healingsongs.de/)
[0631](https://heilsame-lieder.de/?q=0631)
Aham prema
[Katharina Bossinger](https://healingsongs.de/)
[0630](https://heilsame-lieder.de/?q=0630)
Brother Wind
Sun Bear, [Klaus Nagel](https://sovielhimmel.de/)
[0629](https://heilsame-lieder.de/?q=0629)
Now is the Time
Rickie Moore, [Carly Simon](https://carlysimon.com/)
[0628](https://heilsame-lieder.de/?q=0628)
Diru Diru Nina
(trad.Neuguinea)
[0627](https://heilsame-lieder.de/?q=0627)
Deep Peace
[0626](https://heilsame-lieder.de/?q=0626)
Dank an die Schöpfung
[Monika Hollmann](https://herzensgesang.de/)
[0625](https://heilsame-lieder.de/?q=0625)
Shine with the Flowers
[Tara Scheele](https://instagram.com/ma_tara_55)
[0624](https://heilsame-lieder.de/?q=0624)
Great Eagle
[LAOR](https://laormusic.com/)
[0623](https://heilsame-lieder.de/?q=0623)
Over My Soul Keep Watch
[Mark Fox](https://markfoxtruevoice.com/)
[0622](https://heilsame-lieder.de/?q=0622)
Ho’oponopono
[Uta Reykers](https://utareykers.de/)
[0621](https://heilsame-lieder.de/?q=0621)
Let My Heart Reflect Thy Light Lord
[Uta Reykers](https://utareykers.de/)
[0620](https://heilsame-lieder.de/?q=0620)
Love is the Only Way
[0619](https://heilsame-lieder.de/?q=0619)
Om bhur bhuva svaha / Gayatri mantra
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0618](https://heilsame-lieder.de/?q=0618)
Scheiter mal heiter
[Sybille Baumann](https://schicksi.de/)
[0617](https://heilsame-lieder.de/?q=0617)
Ich dehn’ mich aus
[Sybille Baumann](https://schicksi.de/)
[0616](https://heilsame-lieder.de/?q=0616)
Herzmeditation
[Remo Rittiner](https://ayuryoga.ch/), [Jörg Eisfeld](https://jeisfeld.de/)
[0615](https://heilsame-lieder.de/?q=0615)
Nah ans Feuer
[Stefan Pulsaris](https://stefanpulsaris.de/)
[0614](https://heilsame-lieder.de/?q=0614)
Ich sage Ja zu meinem Raum
[Anna-Sophia Schrenker](https://retribe.de/)
[0613](https://heilsame-lieder.de/?q=0613)
Open My Heart
[Alexa Sunshine Rose](https://alexasunshinerose.com/)
[0612](https://heilsame-lieder.de/?q=0612)
Ich bin da
[Wolfgang Bossinger](https://healingsongs.de/)
[0611](https://heilsame-lieder.de/?q=0611)
Herr, deine Liebe ist wie Gras und Ufer
Anders Forstenson, Ernst Hansen
[0610](https://heilsame-lieder.de/?q=0610)
Maluhia
[Hanna Leigh](https://hannaleigh.org/)
[0609a](https://heilsame-lieder.de/?q=0609a)
Come Together
[Mar](https://instagram.com/photographer.ontheroad)
[0609](https://heilsame-lieder.de/?q=0609)
Come Together
[Mar](https://instagram.com/photographer.ontheroad)
[0608](https://heilsame-lieder.de/?q=0608)
Shankara
[Moojibaba](https://mooji.org/)
[0607](https://heilsame-lieder.de/?q=0607)
Liebe, ich vertraue Dir
[Franzi Lotus](https://instagram.com/franzi_lotus/)
[0606](https://heilsame-lieder.de/?q=0606)
Bedingungslose Liebe
[Franzi Lotus](https://instagram.com/franzi_lotus/)
[0605](https://heilsame-lieder.de/?q=0605)
Ein Wald, der leise wächst
[Carmina](https://facebook.com/carminasingt)
[0604](https://heilsame-lieder.de/?q=0604)
Spirallied
[Iria Schärer](https://iria.de/)
[0603](https://heilsame-lieder.de/?q=0603)
Deep Inside My Heart
[0602](https://heilsame-lieder.de/?q=0602)
Omama Kumama Siulai
[0601](https://heilsame-lieder.de/?q=0601)
In Every Whisper of a Tree
Maja Schirdewahn, [re:tribe community](https://retribe.de/)
[0600](https://heilsame-lieder.de/?q=0600)
In meinem Herzen ist Licht
Maja Schirdewahn, [re:tribe community](https://retribe.de/)
[0599](https://heilsame-lieder.de/?q=0599)
Gute Laune überall
[Großstadtengel](https://grossstadtengel.de/)
[0598](https://heilsame-lieder.de/?q=0598)
Paradiesvögel
[re:tribe community](https://retribe.de/)
[0597](https://heilsame-lieder.de/?q=0597)
Ho Min Hamagal Haze
[Ophir Evenodem](https://facebook.com/evenodem)
[0596](https://heilsame-lieder.de/?q=0596)
Ich atme ein, ich atme aus
[Monika Hollmann](https://herzensgesang.de/)
[0595](https://heilsame-lieder.de/?q=0595)
Du bist Segen
Julia Lerch
[0594](https://heilsame-lieder.de/?q=0594)
Take Me Away
Victor Shamas?, Cass Smith?
[0593](https://heilsame-lieder.de/?q=0593)
Good Enough
[Sebastian Kottmair](https://bauchgefuehl-dachau.de/team/sebastian-kottmair)
[0592](https://heilsame-lieder.de/?q=0592)
All the Birds Fly Home
[Deva Premal & Miten](https://devapremalmiten.com/)
[0591](https://heilsame-lieder.de/?q=0591)
Aad gureh nameh
[Jürgen Sandherr](https://meditativessingen.de/)
[0590](https://heilsame-lieder.de/?q=0590)
Sweet Surrender
[Ananda Das](https://anandadas.info/), Wil Nolan
[0589](https://heilsame-lieder.de/?q=0589)
Shri Ram Jaya Ram
[0588](https://heilsame-lieder.de/?q=0588)
Saraswati
[Krishna Das](https://krishnadas.com/)
[0587](https://heilsame-lieder.de/?q=0587)
Sacred Fire
[Yopi & Lotta](https://yopi-music.com/)
[0586](https://heilsame-lieder.de/?q=0586)
In der Stille meines Herzens
[Christian Bergmann](https://christian-bergmann.de/)
[0585](https://heilsame-lieder.de/?q=0585)
Spirit Am I
Helen Schucman, [Christian Bergmann](https://christian-bergmann.de/)
[0584](https://heilsame-lieder.de/?q=0584)
Om Purnam
[Christian Bergmann](https://christian-bergmann.de/)
[0583](https://heilsame-lieder.de/?q=0583)
Gate Gate
[Christian Bergmann](https://christian-bergmann.de/)
[0582](https://heilsame-lieder.de/?q=0582)
Küss meine Seele wach
[Christian Bergmann](https://christian-bergmann.de/)
[0581](https://heilsame-lieder.de/?q=0581)
Teyata Om Bekandze
[0580](https://heilsame-lieder.de/?q=0580)
Root Down Deep
[Sam Garrett](https://samgarrettmusic.com/), [Mollie Mendoza](https://mollie-mendoza.com/)
[0579](https://heilsame-lieder.de/?q=0579)
Unvernünftig sein
[Solea lebt!](https://jeisfeld.de/)
[0578](https://heilsame-lieder.de/?q=0578)
More Beautiful Than I Found It
[Jörg Eisfeld](https://jeisfeld.de/), [Touch&Play](https://touchandplay.org/)
[0577](https://heilsame-lieder.de/?q=0577)
Feierabend
Claudia Hilmer
[0576](https://heilsame-lieder.de/?q=0576)
I’m On My Way
Christoph Bohner
[0575](https://heilsame-lieder.de/?q=0575)
Created By Sound
[Alexa Sunshine Rose](https://alexasunshinerose.com/)
[0574](https://heilsame-lieder.de/?q=0574)
Returning
[Jennifer Berezan](https://jenniferberezan.com/)
[0573](https://heilsame-lieder.de/?q=0573)
May We All Return
[Michael Stillwater](https://innerharmony.com/)
[0572](https://heilsame-lieder.de/?q=0572)
(Es gibt nichts) Anderes zu tun
[0571](https://heilsame-lieder.de/?q=0571)
May Your Heart Be Filled With Joy
[Uta Reykers](https://utareykers.de/)
[0570](https://heilsame-lieder.de/?q=0570)
Aham Prema
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0569](https://heilsame-lieder.de/?q=0569)
Happy Birthday to You
[0568](https://heilsame-lieder.de/?q=0568)
Now is the Moment
[Michael Stillwater](https://innerharmony.com/)
[0567](https://heilsame-lieder.de/?q=0567)
Danke dafür
Vera La Fe & mARTin
[0566](https://heilsame-lieder.de/?q=0566)
Feels Like Home
[Michael Stillwater](https://innerharmony.com/)
[0565a](https://heilsame-lieder.de/?q=0565a)
This Love Will Carry
[Dougie MacLean](https://dougiemaclean.com/), [Helen Yeomans](https://helenyeomans.co.uk/)
[0565](https://heilsame-lieder.de/?q=0565)
This Love Will Carry
[Dougie MacLean](https://dougiemaclean.com/)
[0564](https://heilsame-lieder.de/?q=0564)
Geburtstagslied (So viele helle Sterne)
[0563](https://heilsame-lieder.de/?q=0563)
Thina simunye
(Südafrika, Zulu)
[0562](https://heilsame-lieder.de/?q=0562)
Genau richtig
[Uta Reykers](https://utareykers.de/)
[0561](https://heilsame-lieder.de/?q=0561)
Mondnacht
Joseph von Eichendorff
[0560](https://heilsame-lieder.de/?q=0560)
Cuñaq
[Curawaka](https://curawaka.com/)
[0559](https://heilsame-lieder.de/?q=0559)
Irish Blessing
Komalé Akakpo
[0558](https://heilsame-lieder.de/?q=0558)
Abre la puerta
[Glen Phillips](https://glenphillips.com/)
[0557](https://heilsame-lieder.de/?q=0557)
Siyahamba
[0556](https://heilsame-lieder.de/?q=0556)
Es darf sein, das was ist
Ulrike Brazee, Theresa Rohrbach
[0555](https://heilsame-lieder.de/?q=0555)
Geburtstagslied (Wir freu’n uns so, dass es dich gibt)
[Unmada Kindel](https://unmada.de/)
[0554](https://heilsame-lieder.de/?q=0554)
Oh Great Spirit Guide Us
[0553](https://heilsame-lieder.de/?q=0553)
There is a River
[Michael Stillwater](https://innerharmony.com/)
[0552](https://heilsame-lieder.de/?q=0552)
Peace Be to You
[Michael Stillwater](https://innerharmony.com/)
[0551](https://heilsame-lieder.de/?q=0551)
Teyata Om Bekandze
[Uta Reykers](https://utareykers.de/)
[0550a](https://heilsame-lieder.de/?q=0550a)
Om Mama Heyo
[Maik Baum](https://coaching-in-concert.de/)
[0550](https://heilsame-lieder.de/?q=0550)
Om Mama Heyo
[Maik Baum](https://coaching-in-concert.de/)
[0549](https://heilsame-lieder.de/?q=0549)
Om tare tuttare
[Uta Reykers](https://utareykers.de/)
[0548](https://heilsame-lieder.de/?q=0548)
Om namo bhagavate vasudevaya
[Cataleya Fay](https://cataleyafay.com/)
[0547](https://heilsame-lieder.de/?q=0547)
Wie schön dass es dich gibt
[Cataleya Fay](https://cataleyafay.com/)
[0546](https://heilsame-lieder.de/?q=0546)
Luz del bosque
[Adrian Freedman](https://adrianfreedman.com/), [Suyana](https://suyana.net/)
[0545](https://heilsame-lieder.de/?q=0545)
Ich bin da
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0544](https://heilsame-lieder.de/?q=0544)
O du Größere
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0543](https://heilsame-lieder.de/?q=0543)
Om Tare Tuttare (Nimm mich)
[Stefan Pulsaris](https://stefanpulsaris.de/)
[0542](https://heilsame-lieder.de/?q=0542)
Teyata / Om Bekandze
[Christian Bergmann](https://christian-bergmann.de/)
[0541](https://heilsame-lieder.de/?q=0541)
Om Tryambakam Yajaamahe
[Christian Bergmann](https://christian-bergmann.de/)
[0540](https://heilsame-lieder.de/?q=0540)
Om Ganesha Om
[0539](https://heilsame-lieder.de/?q=0539)
La ilaha il Allah / Kyrie Eleison
[Christian Bergmann](https://christian-bergmann.de/)
[0538](https://heilsame-lieder.de/?q=0538)
All is One
[Christian Bergmann](https://christian-bergmann.de/)
[0537](https://heilsame-lieder.de/?q=0537)
Ho’oponopono
[Christian Bergmann](https://christian-bergmann.de/)
[0536](https://heilsame-lieder.de/?q=0536)
All I Ask of You
[Shivananda Ackermann](https://heartsinging.ch/)
[0535](https://heilsame-lieder.de/?q=0535)
Connection (Into the I Am)
[Sebastian David Hornstein](https://highvibe.at/sebastian-david-hornstein)
[0534](https://heilsame-lieder.de/?q=0534)
Universal Lover
[Fantuzzi](https://fantuzzimusic.com/)
[0533](https://heilsame-lieder.de/?q=0533)
Soham - I am the Sun
[Renée Sunbird](https://reneesunbird.com/)
[0532](https://heilsame-lieder.de/?q=0532)
Auf dem Weg den ich geh
Ulrich Meyerratken
[0531](https://heilsame-lieder.de/?q=0531)
Jay Jay Ma Kali
[0530](https://heilsame-lieder.de/?q=0530)
Here Now
[Alexa Sunshine Rose](https://alexasunshinerose.com/)
[0529](https://heilsame-lieder.de/?q=0529)
Om Namah Shivaya (Shivaya Namaho)
[0528](https://heilsame-lieder.de/?q=0528)
Ayayaya
[0527](https://heilsame-lieder.de/?q=0527)
Jaya Jaya Sita Ram
[Uta Reykers](https://utareykers.de/)
[0526](https://heilsame-lieder.de/?q=0526)
Sita Rama Kaho
[0525](https://heilsame-lieder.de/?q=0525)
Jay Jay Radha Ramana Hari Bol
[0524](https://heilsame-lieder.de/?q=0524)
By Thy Grace
[Snatam Kaur Khalsa](https://snatamkaur.com/)
[0523](https://heilsame-lieder.de/?q=0523)
Child of the Sky
[LAOR](https://laormusic.com/)
[0522](https://heilsame-lieder.de/?q=0522)
Schläft ein Lied
Joseph von Eichendorff, [Wolfgang Friederich](https://klangheilzentrum.de/Lieder-und-Chants-von-Wolfgang-Friederich)
[0521b](https://heilsame-lieder.de/?q=0521b)
O du fröhliche
[0521a](https://heilsame-lieder.de/?q=0521a)
O du fröhliche
[0521](https://heilsame-lieder.de/?q=0521)
O du fröhliche
[0520](https://heilsame-lieder.de/?q=0520)
Om Gam Ganapataye Namaha
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0519](https://heilsame-lieder.de/?q=0519)
Queen of Peace
[Nalini Blossom](https://naliniblossom.com/)
[0518](https://heilsame-lieder.de/?q=0518)
Wenn ich tanz’
[Anna-Sophia Schrenker](https://retribe.de/)
[0517](https://heilsame-lieder.de/?q=0517)
From Heart to Heart
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0516](https://heilsame-lieder.de/?q=0516)
Liberation
[Mandála Jurema](https://instagram.com/mandala.jurema)
[0515](https://heilsame-lieder.de/?q=0515)
Ong Namo Guru Dev Namo
[Snatam Kaur Khalsa](https://snatamkaur.com/)
[0514](https://heilsame-lieder.de/?q=0514)
One Step at a Time
[Uta Reykers](https://utareykers.de/)
[0513](https://heilsame-lieder.de/?q=0513)
Ruhe ist in mir
[Uta Reykers](https://utareykers.de/)
[0512](https://heilsame-lieder.de/?q=0512)
Shivaya
[Uta Reykers](https://utareykers.de/)
[0511](https://heilsame-lieder.de/?q=0511)
Wiedergeburt
[Solea lebt!](https://jeisfeld.de/)
[0510](https://heilsame-lieder.de/?q=0510)
Ley o ley
(Lappland)
[0509](https://heilsame-lieder.de/?q=0509)
Hörst du das Lied der Erde
[Barbara Gugerli-Dolder](https://umweltbildung-plus.ch/), [Veronika Donner](https://veronika-donner.de/)
[0508](https://heilsame-lieder.de/?q=0508)
Aad gureh nameh
[Snatam Kaur Khalsa](https://snatamkaur.com/)
[0507](https://heilsame-lieder.de/?q=0507)
Ich bitte um Heilung
[Wolfgang Friederich](https://klangheilzentrum.de/Lieder-und-Chants-von-Wolfgang-Friederich)
[0506a](https://heilsame-lieder.de/?q=0506a)
Trust / Om Gam Ganapataye Namaha
[Lunasol](https://lunasolmusic.de/), [Florian M. Litzlfelder](https://florian-michael-litzlfelder.de/)
[0506](https://heilsame-lieder.de/?q=0506)
Trust (Everything is Gonna Come)
[Lunasol](https://lunasolmusic.de/)
[0505](https://heilsame-lieder.de/?q=0505)
Dies ist der Ort
Marie Laabs
[0504](https://heilsame-lieder.de/?q=0504)
Das Rad des Jahres
[Nickomo Clarke](https://nickomoandrasullah.com/)
[0503](https://heilsame-lieder.de/?q=0503)
In der Bahn
[Solea lebt!](https://jeisfeld.de/)
[0502](https://heilsame-lieder.de/?q=0502)
Zu Hause
[Solea lebt!](https://jeisfeld.de/)
[0501](https://heilsame-lieder.de/?q=0501)
Geliebte Seele
[Solea lebt!](https://jeisfeld.de/)
[0500](https://heilsame-lieder.de/?q=0500)
Ich reise zu mir selbst
[Solea lebt!](https://jeisfeld.de/)
[0499](https://heilsame-lieder.de/?q=0499)
Happy Birthday Just for You
[0498](https://heilsame-lieder.de/?q=0498)
We are All the Leaves of One Tree
[0497](https://heilsame-lieder.de/?q=0497)
Prana apana sushumna hari
Dilpreet Bhatia
[0496](https://heilsame-lieder.de/?q=0496)
Manchmal braucht es nicht viel
[Stefan Pulsaris](https://stefanpulsaris.de/)
[0495](https://heilsame-lieder.de/?q=0495)
Die heilige Maria (Salve Santa Maria)
[Stefan Pulsaris](https://stefanpulsaris.de/)
[0494](https://heilsame-lieder.de/?q=0494)
Let the Heaven
Mevlana Rumi
[0493](https://heilsame-lieder.de/?q=0493)
Deine Liebe berührt mich
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0492](https://heilsame-lieder.de/?q=0492)
We All Come from the Goddess
[0491](https://heilsame-lieder.de/?q=0491)
Round and Round We Go (Dance of Universal Peace)
Sufi, [Carien Wijnen](https://healingvoice.de/)
[0490](https://heilsame-lieder.de/?q=0490)
Mensch aus Fleisch und Blut
[Stefan Pulsaris](https://stefanpulsaris.de/)
[0489](https://heilsame-lieder.de/?q=0489)
I Sing for Love
[Carolin Deininger](https://klangbrunnen.de/)
[0488](https://heilsame-lieder.de/?q=0488)
Grandmother Moon
[Hanuman Project](https://hanumanproject.com/)
[0487](https://heilsame-lieder.de/?q=0487)
In This Sphere of Creation
[Anke Bolz](https://anke-bolz.de/)
[0486](https://heilsame-lieder.de/?q=0486)
Learn to Live Your Life
[0485](https://heilsame-lieder.de/?q=0485)
Ich bin hier
[Jörg Eisfeld](https://jeisfeld.de/), [Uta Reykers](https://utareykers.de/)
[0484](https://heilsame-lieder.de/?q=0484)
Trag mich, ich bin gehalten
Natascha & [Jörg](https://jeisfeld.de/)
[0483](https://heilsame-lieder.de/?q=0483)
Du hast doch nichts zu erwarten
[0482](https://heilsame-lieder.de/?q=0482)
Hara Mahadeva
[Moojibaba](https://mooji.org/), Prem & Jai Sahaja
[0481](https://heilsame-lieder.de/?q=0481)
Wir wachen auf
[Philipp Richter](https://linktr.ee/philipprichter)
[0480](https://heilsame-lieder.de/?q=0480)
Dank an die Erde
Eila
[0479](https://heilsame-lieder.de/?q=0479)
A Heyo Pacha Mama
[Janine Wapf](https://praxis-lichtfunke.ch/)
[0478](https://heilsame-lieder.de/?q=0478)
Erde ist mein Körper
[0477](https://heilsame-lieder.de/?q=0477)
Ein Geschenk
[Florian M. Litzlfelder](https://florian-michael-litzlfelder.de/)
[0476](https://heilsame-lieder.de/?q=0476)
Herz ganz weit
Marlene
[0475](https://heilsame-lieder.de/?q=0475)
Iye Iyo Iye
[Phoenix Maria](https://linktr.ee/phoenix.maria)
[0474](https://heilsame-lieder.de/?q=0474)
Heya Heya Ho (Impro)
[0473](https://heilsame-lieder.de/?q=0473)
Oh Great Spirit
[0472](https://heilsame-lieder.de/?q=0472)
Ein kleines Lied
[Katharina Bossinger](https://healingsongs.de/)
[0471](https://heilsame-lieder.de/?q=0471)
Peace within Me / Frieden in mir
[Jessica Lieb](https://instagram.com/jessicalieb_)
[0470](https://heilsame-lieder.de/?q=0470)
Remember
[Martina Rehli](https://chantandwalk.de/)
[0469](https://heilsame-lieder.de/?q=0469)
Ich bin in Frieden mit mir und dir
[Gerhard Hajny](https://mylifeismusicandmore.at/)
[0468](https://heilsame-lieder.de/?q=0468)
Ich schenk dir meine Liebe
[Andrea Korr](https://youtube.com/channel/UCatU_HI-6kTpAaqUKAYDXcg)
[0467](https://heilsame-lieder.de/?q=0467)
Mein Herzl lacht
[Marie-Pascale Gräbener](https://pascale-graebener.de/)
[0466](https://heilsame-lieder.de/?q=0466)
Asatoma
[Sam Garrett](https://samgarrettmusic.com/), [Mollie Mendoza](https://mollie-mendoza.com/)
[0465](https://heilsame-lieder.de/?q=0465)
Ich bin da
[Uta Reykers](https://utareykers.de/)
[0464](https://heilsame-lieder.de/?q=0464)
Hare Krishna
[0463](https://heilsame-lieder.de/?q=0463)
Bhole Bhole Shankara
[Engelbert](https://instagram.com/mystical.mystery)
[0462](https://heilsame-lieder.de/?q=0462)
Hashivenu
(biblisch)
[0461](https://heilsame-lieder.de/?q=0461)
Raise Your Voice
[Suyana](https://suyana.net/)
[0460](https://heilsame-lieder.de/?q=0460)
Mama Cacao
[Makantao](https://makantao.com/)
[0459](https://heilsame-lieder.de/?q=0459)
I sag JA
[0458](https://heilsame-lieder.de/?q=0458)
Step By Step
Babek Bodien, Susanne Häll
[0457](https://heilsame-lieder.de/?q=0457)
Ave Maria
(Christoph?)
[0456a](https://heilsame-lieder.de/?q=0456a)
Komm meine Seele
[(arr: Carolin Hartwig)](https://soulsurfer.net/)
[0456](https://heilsame-lieder.de/?q=0456)
Komm meine Seele
[(arr: Yvaya)](https://yvaya.de/)
[0455](https://heilsame-lieder.de/?q=0455)
Butterfly and Caterpillar
Julia?
[0454](https://heilsame-lieder.de/?q=0454)
Lava
James Ford Murphy
[0453](https://heilsame-lieder.de/?q=0453)
Return to Love
[Susie Ro](https://susiero.com/)
[0452](https://heilsame-lieder.de/?q=0452)
Sag nein
[Servin’Spirit](https://servinspirit.me/)
[0451](https://heilsame-lieder.de/?q=0451)
Sita Ram
[Krishna Das](https://krishnadas.com/)
[0450](https://heilsame-lieder.de/?q=0450)
Ich hab JA gesagt
[Stefan Pulsaris](https://stefanpulsaris.de/)
[0449](https://heilsame-lieder.de/?q=0449)
Fly Like an Eagle
Arapahoe Tribe
[0448](https://heilsame-lieder.de/?q=0448)
Hineh matov
Psalm 133, M. Yacovson
[0447](https://heilsame-lieder.de/?q=0447)
Singoba nge
(Südafrika)
[0446](https://heilsame-lieder.de/?q=0446)
We Will Stand Together, Holding Hands
[Anna-Sophia Schrenker](https://retribe.de/)
[0445](https://heilsame-lieder.de/?q=0445)
Shabbes
(Jiddisch)
[0444](https://heilsame-lieder.de/?q=0444)
Yube Nawa Ainbu
Nawa Siã e Kupi Huni Kuin
[0443](https://heilsame-lieder.de/?q=0443)
Ek ong kar
[Uta Reykers](https://utareykers.de/)
[0442](https://heilsame-lieder.de/?q=0442)
Sanfter Nebel hilft das Licht zu seh’n
[Florian M. Litzlfelder](https://florian-michael-litzlfelder.de/)
[0441](https://heilsame-lieder.de/?q=0441)
Brenne Holz und glühe Glut
[Drei Kräfte Stamm](https://schamanentum.at/), Klemens Robe
[0440](https://heilsame-lieder.de/?q=0440)
Ich lasse los und geb mich hin
[Amélie Mehru](https://ameliemehru.com/)
[0439](https://heilsame-lieder.de/?q=0439)
My Beloved (Yeshua)
Alessandro Vilas Boas, [Michael Koulianos](https://michaelkoulianos.org/)
[0438](https://heilsame-lieder.de/?q=0438)
I’m Alive (Time for My Soul to Let Go)
[Mitsch Kohn](https://www.mitschkohn.de/), [Netanel Goldberg](https://netanelgoldberg.com/)
[0437](https://heilsame-lieder.de/?q=0437)
Om Sacred Fire
[0436](https://heilsame-lieder.de/?q=0436)
We are Guided and Protected
[Noam Ini Ben David](https://noambendavid.bandcamp.com/), [Mandála Jurema](https://instagram.com/mandala.jurema)
[0435](https://heilsame-lieder.de/?q=0435)
Om namah Shivaya
[0434](https://heilsame-lieder.de/?q=0434)
Canto de Nanã
Dorival Caymmi
[0433](https://heilsame-lieder.de/?q=0433)
Jagadambe Jay Jay Ma
[Engelbert](https://instagram.com/mystical.mystery)
[0432](https://heilsame-lieder.de/?q=0432)
Banuwa
(Liberia)
[0431](https://heilsame-lieder.de/?q=0431)
Ich nehme es an
[Iria Schärer](https://iria.de/)
[0430](https://heilsame-lieder.de/?q=0430)
Ich bin schön, ich bin heil
[0429](https://heilsame-lieder.de/?q=0429)
I’m Here Breathing (I Open My Heart)
[Uta Reykers](https://utareykers.de/)
[0428](https://heilsame-lieder.de/?q=0428)
Universal Greeting
Mahatma Gandhi
[0427](https://heilsame-lieder.de/?q=0427)
Möge ich glücklich sein
[0426](https://heilsame-lieder.de/?q=0426)
Om Shri Maha Lakshmi
Maniko Dru Dadigan
[0425](https://heilsame-lieder.de/?q=0425)
All My Brothers
[Suyana](https://suyana.net/)
[0424](https://heilsame-lieder.de/?q=0424)
Silent Moment
[Gabriele O´Grissek](http://celtic-roots.de/)
[0423a](https://heilsame-lieder.de/?q=0423a)
Long Time Sun
Mike Heron, [Gabriele O´Grissek](http://celtic-roots.de/)
[0423](https://heilsame-lieder.de/?q=0423)
Long Time Sun
Mike Heron, [Snatam Kaur Khalsa](https://snatamkaur.com/)
[0422](https://heilsame-lieder.de/?q=0422)
Gelassen
[Iria Schärer](https://iria.de/)
[0421](https://heilsame-lieder.de/?q=0421)
Om namo bhagavate vasudevaya
[Praful](http://prafulmusic.com/)
[0420](https://heilsame-lieder.de/?q=0420)
Rama o Rama / Sita Ram
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0419](https://heilsame-lieder.de/?q=0419)
Ich tauche ni i mini Chraft
[0418](https://heilsame-lieder.de/?q=0418)
Om Gam Ganapataye Namaha (Jay Ganesha)
[Uta Reykers](https://utareykers.de/)
[0417](https://heilsame-lieder.de/?q=0417)
Om Gam Ganapataye Namaha
[Uta Reykers](https://utareykers.de/)
[0416](https://heilsame-lieder.de/?q=0416)
Wir sind verbunden im Kreis
[Jörg Eisfeld](https://jeisfeld.de/)
[0415](https://heilsame-lieder.de/?q=0415)
Stillness in Motion
[Lulu & Mischka](https://luluandmischka.com/)
[0414](https://heilsame-lieder.de/?q=0414)
Samba Sada Shiva
[Sarah Creations](https://www.sarahcreations.de/)
[0413](https://heilsame-lieder.de/?q=0413)
We are Opening Up
(Rainbow Song)
[0412](https://heilsame-lieder.de/?q=0412)
Komm in den Kreis
[Gila Antara](http://www.gila-antara.co.uk/)
[0411](https://heilsame-lieder.de/?q=0411)
Frühling (Kanon)
[0410](https://heilsame-lieder.de/?q=0410)
Baum der Seelen
[Laura Schneider](https://instagram.com/lauraschneider_freeagain.love)
[0409](https://heilsame-lieder.de/?q=0409)
If you wanna be free
[0408](https://heilsame-lieder.de/?q=0408)
Mama Cacao
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0407](https://heilsame-lieder.de/?q=0407)
Hear the Sound
[0406](https://heilsame-lieder.de/?q=0406)
Eitz deaf ma lem! (Sensing Myself)
[Servin’Spirit](https://servinspirit.me/)
[0405](https://heilsame-lieder.de/?q=0405)
Jetzt ist Sommer
[Daniel Dickopf](https://wiseguys.de/)
[0404](https://heilsame-lieder.de/?q=0404)
Let the Sunshine In
Galt MacDermot
[0403](https://heilsame-lieder.de/?q=0403)
Jaya mata Kali
Haidakhan Shivani
[0402](https://heilsame-lieder.de/?q=0402)
Du bist so schön
[Wolfgang Bossinger](https://healingsongs.de/)
[0401](https://heilsame-lieder.de/?q=0401)
Aus meim Herzen kommt
[Philipp Ham Kuman](https://hamkuman.com/)
[0400](https://heilsame-lieder.de/?q=0400)
Alles was ich bin und gebe (Namasté)
[Anna-Sophia Schrenker](https://retribe.de/)
[0399](https://heilsame-lieder.de/?q=0399)
Vuelo de mariposa
[Deborah Yudelewicz](https://youtube.com/@Debysong)
[0398](https://heilsame-lieder.de/?q=0398)
Message of Love
Jirivil, Peter Wood, Isharia, [Gabriele O´Grissek](http://celtic-roots.de/)
[0397](https://heilsame-lieder.de/?q=0397)
Amazing Grace / Hare Krishna
[Krishna Das](https://krishnadas.com/)
[0396](https://heilsame-lieder.de/?q=0396)
May the Circle
(Pagan Community)
[0395a](https://heilsame-lieder.de/?q=0395a)
Einfach gehen
[Amei Helm](http://lied-der-erde.de/), [Stimmvolk](https://stimmvolk.ch/)
[0395](https://heilsame-lieder.de/?q=0395)
Einfach gehen
[Amei Helm](http://lied-der-erde.de/)
[0394](https://heilsame-lieder.de/?q=0394)
Roots So Deep
[Shimshai](https://shimshai.com/)
[0393](https://heilsame-lieder.de/?q=0393)
Yawe ho
trad. irokesisch
[0392](https://heilsame-lieder.de/?q=0392)
We are One in the Spirit
Peter Scholte, [Janin Devi](https://janin-andre.com/)
[0391](https://heilsame-lieder.de/?q=0391)
Om Kali, Om Mata
[Shimshai](https://shimshai.com/)
[0390](https://heilsame-lieder.de/?q=0390)
Song of the Stars
[Mirabai Ceiba](https://mirabaiceiba.com/)
[0389](https://heilsame-lieder.de/?q=0389)
Lokah Samastah (May All the Beings)
[Anahat](https://anahat.de/)
[0388](https://heilsame-lieder.de/?q=0388)
I Pray for Peace on Earth
Bholanath Alexander
[0387](https://heilsame-lieder.de/?q=0387)
Yo honro el lugar que hay en ti
[0386](https://heilsame-lieder.de/?q=0386)
Heal the World / Om mani peme hung
Michael Jackson, [Raimund Mauch](https://kraftderstimme.de/)
[0385](https://heilsame-lieder.de/?q=0385)
Lo Yisa Goy
traditionell hebräisch
[0384](https://heilsame-lieder.de/?q=0384)
Earth My Body
[Maggie Clifford](https://maggieclifford.com/)
[0383](https://heilsame-lieder.de/?q=0383)
Sat Chit Ananda
[Sam Garrett](https://samgarrettmusic.com/)
[0382a](https://heilsame-lieder.de/?q=0382a)
Tiefer Friede ist in mir / Shalom
[Jörg Eisfeld](https://jeisfeld.de/), [Shivananda Ackermann](https://heartsinging.ch/)
[0382](https://heilsame-lieder.de/?q=0382)
Tiefer Friede ist in mir
[Jörg Eisfeld](https://jeisfeld.de/), Aretha Franklin, George Michael
[0381](https://heilsame-lieder.de/?q=0381)
Auf den Schwingen der Liebe
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0380](https://heilsame-lieder.de/?q=0380)
In der Schönheit meines Herzens
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0379](https://heilsame-lieder.de/?q=0379)
Einatmen, ausatmen
[Uta Reykers](https://utareykers.de/)
[0378](https://heilsame-lieder.de/?q=0378)
Erde meine Mutter
[Gila Antara](http://www.gila-antara.co.uk/)
[0377](https://heilsame-lieder.de/?q=0377)
We are One in Harmony
Rainbow Family
[0376](https://heilsame-lieder.de/?q=0376)
Von der Erde nehme ich die Kraft
[Gila Antara](http://www.gila-antara.co.uk/)
[0375](https://heilsame-lieder.de/?q=0375)
Vuela con el Viento
[Ayla Schafer](https://aylaschafer.co.uk/)
[0374](https://heilsame-lieder.de/?q=0374)
Together
[Alexia Chellun](https://alexiachellun.com/)
[0373](https://heilsame-lieder.de/?q=0373)
Du bist gesegnet
[Helge Burggrabe](https://burggrabe.de/)
[0372](https://heilsame-lieder.de/?q=0372)
Call of the Elements
[Melanie Nowak](https://melanienowak.de/)
[0371](https://heilsame-lieder.de/?q=0371)
Oxum / Oshun
[Mirabai Ceiba](https://mirabaiceiba.com/)
[0370](https://heilsame-lieder.de/?q=0370)
Om bhur bhuva svaha / Gayatri Mantra
Jonas Fredriksson
[0369](https://heilsame-lieder.de/?q=0369)
Shivoham Arunachalam
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0368](https://heilsame-lieder.de/?q=0368)
Yemayá asesú
Yoruba
[0367](https://heilsame-lieder.de/?q=0367)
Ritschas da l’aua
Veronika Stalder
[0366](https://heilsame-lieder.de/?q=0366)
Create a Pure Heart in Me
[Nava Tehila](https://navatehila.org/)
[0365](https://heilsame-lieder.de/?q=0365)
Fest verwurzelt in der Erde
[Wolfgang Bossinger](https://healingsongs.de/)
[0364](https://heilsame-lieder.de/?q=0364)
Om namah Shivay
[0363](https://heilsame-lieder.de/?q=0363)
Sarasvati, Mahalakshmi
Harald Fritz, [Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0362](https://heilsame-lieder.de/?q=0362)
Namaste (Chidananda Rupeh)
[Deva Premal & Miten](https://devapremalmiten.com/)
[0361](https://heilsame-lieder.de/?q=0361)
Jay Ganesha Deva
[0360](https://heilsame-lieder.de/?q=0360)
I Release Control / Emana Yo
Xavier Rudd
[0359](https://heilsame-lieder.de/?q=0359)
In der ewigen Umarmung
[Uta Reykers](https://utareykers.de/)
[0358](https://heilsame-lieder.de/?q=0358)
Schön dass es dich gibt
[Iria Schärer](https://iria.de/)
[0357](https://heilsame-lieder.de/?q=0357)
Bunte Welt
Clara Teresa
[0356](https://heilsame-lieder.de/?q=0356)
Om namo bhagavate vasudevaya
[0355](https://heilsame-lieder.de/?q=0355)
Radhe Govinda Gopal
[0354](https://heilsame-lieder.de/?q=0354)
Om Mani Padme Hum
[Adrian Freedman](https://adrianfreedman.com/)
[0353](https://heilsame-lieder.de/?q=0353)
Gate Gate
[Florian M. Litzlfelder](https://florian-michael-litzlfelder.de/)
[0352](https://heilsame-lieder.de/?q=0352)
Sa Re Sa Sa
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0351](https://heilsame-lieder.de/?q=0351)
To Be Free
Martin Nielsen
[0350](https://heilsame-lieder.de/?q=0350)
Maria llena de Gracia
[0349](https://heilsame-lieder.de/?q=0349)
Ein langer Tag
[Martina vom Hövel](https://martinavomhoevel.de/)
[0348](https://heilsame-lieder.de/?q=0348)
Ek ong kar
[Snatam Kaur Khalsa](https://snatamkaur.com/)
[0347](https://heilsame-lieder.de/?q=0347)
Sharanam Ganesha
[0346](https://heilsame-lieder.de/?q=0346)
Kann ich auch mal nichts tun?
[Joachim Goerke](https://joachimgoerke.de/)
[0345](https://heilsame-lieder.de/?q=0345)
Noku Mana
Huni Kuin, Manuel Cazasola Huancco
[0344](https://heilsame-lieder.de/?q=0344)
Om bhur bhuva svaha / Gayatri Mantra
[0343](https://heilsame-lieder.de/?q=0343)
Von meinem Herzen zu Deinem Herzen
[Veronika Donner](https://veronika-donner.de/)
[0342](https://heilsame-lieder.de/?q=0342)
Circlesong Seven
[Bobby McFerrin](https://bobbymcferrin.com/)
[0341](https://heilsame-lieder.de/?q=0341)
Heilung geschehe
[Iria Schärer](https://iria.de/)
[0340](https://heilsame-lieder.de/?q=0340)
Wait for the Lord
[Taizé](https://taize.fr/)
[0339](https://heilsame-lieder.de/?q=0339)
Om Jesu
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0338](https://heilsame-lieder.de/?q=0338)
Shiva Shambho
[Satyaa & Pari](https://satyaa-pari.com/)
[0337a](https://heilsame-lieder.de/?q=0337a)
Music of Silence
[Shivananda Ackermann](https://heartsinging.ch/)
[0337](https://heilsame-lieder.de/?q=0337)
Music of Silence
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0336](https://heilsame-lieder.de/?q=0336)
Om Tryambakam
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0335](https://heilsame-lieder.de/?q=0335)
If We Want Peace, We Have to Be Peace
[Iria Schärer](https://iria.de/)
[0334](https://heilsame-lieder.de/?q=0334)
Ich bin ganz in meiner Mitte
[0333](https://heilsame-lieder.de/?q=0333)
Friedensgebet
[Uta Reykers](https://utareykers.de/)
[0332](https://heilsame-lieder.de/?q=0332)
Don’t Worry, Life is Your Friend
[0331](https://heilsame-lieder.de/?q=0331)
Shalom
[Shivananda Ackermann](https://heartsinging.ch/)
[0330](https://heilsame-lieder.de/?q=0330)
Adi Shakti
[0329](https://heilsame-lieder.de/?q=0329)
May the Fire of Love Ignite Us
[Peter & Aneeta Makena](https://petermakena.com/)
[0328](https://heilsame-lieder.de/?q=0328)
Auch eine Reise von tausend Meilen
[Klaus Nagel](https://sovielhimmel.de/), [Susanne Mössinger](https://sovielhimmel.de/)
[0327](https://heilsame-lieder.de/?q=0327)
Ich sage Ja zu meiner Stimme
[Shivananda Ackermann](https://heartsinging.ch/)
[0326](https://heilsame-lieder.de/?q=0326)
Let Us Sing
Sky
[0325](https://heilsame-lieder.de/?q=0325)
Bura Samene
[0324](https://heilsame-lieder.de/?q=0324)
Komm lass dich berühren
[0323](https://heilsame-lieder.de/?q=0323)
Der Atem frei
[Raimund Mauch](https://kraftderstimme.de/)
[0322](https://heilsame-lieder.de/?q=0322)
Hey Niketi hey wana
[0321](https://heilsame-lieder.de/?q=0321)
Humble Yourself
[0320](https://heilsame-lieder.de/?q=0320)
Come, Come Whoever You Are
Mevlana Rumi, [Sudhananda](https://sudhananda.com/)
[0319](https://heilsame-lieder.de/?q=0319)
Licht der Welt
[0318](https://heilsame-lieder.de/?q=0318)
Let It Go
[Jesca Onderwater](https://jeskaonderwater.com/)
[0317](https://heilsame-lieder.de/?q=0317)
Coconut Tree
[0316](https://heilsame-lieder.de/?q=0316)
Cuatro vientos
[Danit Treubig](https://youtube.com/channel/UCN31w7dRjjz8CeP0GfSIo8A)
[0315](https://heilsame-lieder.de/?q=0315)
A-eya-ho
[0314](https://heilsame-lieder.de/?q=0314)
Radhe Radhe Radhe Shyam
[0313](https://heilsame-lieder.de/?q=0313)
Eo Wahi Pana La
[Lei'Ohu Ryder](https://leiohuryder.com/)
[0312](https://heilsame-lieder.de/?q=0312)
Song Universal / Universal Mantra
[Michael Stillwater](https://innerharmony.com/)
[0311](https://heilsame-lieder.de/?q=0311)
Home Is Where My Heart Is
Osho International Foundation
[0310](https://heilsame-lieder.de/?q=0310)
We are One / I am in You / Friedensbaum
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0309](https://heilsame-lieder.de/?q=0309)
We are Born in Light
[Laeela](https://laeela.com/)
[0308a](https://heilsame-lieder.de/?q=0308a)
Prayer of the Mothers
[Yael Deckelbaum](https://yaeldeckelbaum.com/)
[0308](https://heilsame-lieder.de/?q=0308)
Zwischen Himmel und dem Land (Prayer of the Mothers)
Amithra H. Reithmaier, [Yael Deckelbaum](https://yaeldeckelbaum.com/)
[0307](https://heilsame-lieder.de/?q=0307)
Ja, ich lass es mir gut geh’n
[Anna Hausser](https://lebenswendezeiten.de/), [Jörg Eisfeld](https://jeisfeld.de/)
[0306](https://heilsame-lieder.de/?q=0306)
Ich weiß es nicht
Kristina Wesely, [Jörg Eisfeld](https://jeisfeld.de/)
[0305](https://heilsame-lieder.de/?q=0305)
Brothers and Sisters
[Katharina Bossinger](https://healingsongs.de/)
[0304](https://heilsame-lieder.de/?q=0304)
Om namah Shivaya
[Krishna Das](https://krishnadas.com/)
[0303](https://heilsame-lieder.de/?q=0303)
Liebe tanzen
[Jörg Eisfeld](https://jeisfeld.de/)
[0302](https://heilsame-lieder.de/?q=0302)
Govinda Narayana
[0301](https://heilsame-lieder.de/?q=0301)
Pacha Mama, Padre Sol
[0300](https://heilsame-lieder.de/?q=0300)
Ich komm zu Dir
[Uta Reykers](https://utareykers.de/)
[0299](https://heilsame-lieder.de/?q=0299)
Sanfte Brise, Abendwind
[Anna-Sophia Schrenker](https://retribe.de/), Hayati Gudrun Ahnen
[0298](https://heilsame-lieder.de/?q=0298)
I Find My Joy in the Simple Things
[0297](https://heilsame-lieder.de/?q=0297)
You Touch My Heart
[Carola Fürbaß](https://bodyvoicehealing.com/)
[0296](https://heilsame-lieder.de/?q=0296)
Inanay
[0295](https://heilsame-lieder.de/?q=0295)
Kraftmantra
[Nana Hoogklimmer (SanftMutig)](https://sanft-mutig.de/)
[0294](https://heilsame-lieder.de/?q=0294)
Streiten passiert
[Jörg Eisfeld](https://jeisfeld.de/), [Anna Hausser](https://lebenswendezeiten.de/)
[0293](https://heilsame-lieder.de/?q=0293)
Od yavo shalom aleinu
Mosh Ben-Ari
[0292](https://heilsame-lieder.de/?q=0292)
One Bright Morning
[0291](https://heilsame-lieder.de/?q=0291)
Abuelito fuego
[Shimshai & Susana](https://shimshai.com/)
[0290a](https://heilsame-lieder.de/?q=0290a)
Ihr Lieder fliegt jetzt weit hinaus
[Šárka Elias](https://sarkaelias.com/), [Shivananda Ackermann](https://heartsinging.ch/)
[0290](https://heilsame-lieder.de/?q=0290)
May the Love We Share
[Šárka Elias](https://sarkaelias.com/)
[0289](https://heilsame-lieder.de/?q=0289)
Solo no puedes llegar
Brucer Werber
[0288](https://heilsame-lieder.de/?q=0288)
Un poquito cantas
[0287](https://heilsame-lieder.de/?q=0287)
Please Call Me By My True Name
[0286](https://heilsame-lieder.de/?q=0286)
Oeaho
[Alexia Chellun](https://alexiachellun.com/)
[0285](https://heilsame-lieder.de/?q=0285)
Ease and Flow (Jaya Ganesha)
[Lulu & Mischka](https://luluandmischka.com/)
[0284](https://heilsame-lieder.de/?q=0284)
Jaya Sita Ram, Jay Jay Hanuman
[Krishna Das](https://krishnadas.com/)
[0283](https://heilsame-lieder.de/?q=0283)
Just As You Are
[Lea Morris](https://thisislea.com/)
[0282](https://heilsame-lieder.de/?q=0282)
True or False
[Jörg Eisfeld](https://jeisfeld.de/)
[0281](https://heilsame-lieder.de/?q=0281)
I Love Myself the Way I Am
[Jai Michael Josephs](https://www.mindprod.com/livinglove/methods/songs.html)
[0280](https://heilsame-lieder.de/?q=0280)
Tumi bhaja re mana
[Manish Vyas](https://manishvyas.com/)
[0279](https://heilsame-lieder.de/?q=0279)
Sita Ram Jay Jay Ram
Omkareswar
[0278](https://heilsame-lieder.de/?q=0278)
Music Gives a Soul to the Universe
[Monika Hollmann](https://herzensgesang.de/), Plato
[0277](https://heilsame-lieder.de/?q=0277)
Wäre Danke das einzige Gebet
[Florian M. Litzlfelder](https://florian-michael-litzlfelder.de/)
[0276](https://heilsame-lieder.de/?q=0276)
I Release the Past
[Jai Michael Josephs](https://www.mindprod.com/livinglove/methods/songs.html)
[0275](https://heilsame-lieder.de/?q=0275)
Tief in mir bin ich Kraft
[Iria Schärer](https://iria.de/)
[0274](https://heilsame-lieder.de/?q=0274)
Jaya Jagadambe / Ma Durga
[Krishna Das](https://krishnadas.com/)
[0273](https://heilsame-lieder.de/?q=0273)
Sat Narayan Wahe Guru
[0272](https://heilsame-lieder.de/?q=0272)
Ishq’Allah mahbudlillah, Allah Allah
[0271](https://heilsame-lieder.de/?q=0271)
Ganesha Sharanam
[0270](https://heilsame-lieder.de/?q=0270)
Guru Guru Wahe Guru
[0269](https://heilsame-lieder.de/?q=0269)
Home I Am Home
[Helen Yeomans](https://helenyeomans.co.uk/)
[0268](https://heilsame-lieder.de/?q=0268)
It’s All All Right
[Jai Michael Josephs](https://www.mindprod.com/livinglove/methods/songs.html)
[0267](https://heilsame-lieder.de/?q=0267)
Let My Heart Reflect Thy Light Lord
Hazrat Inayat Khan
[0266](https://heilsame-lieder.de/?q=0266)
Altissimo corazón
Selina Horowitz
[0265](https://heilsame-lieder.de/?q=0265)
Hare Krishna
[0264](https://heilsame-lieder.de/?q=0264)
Ja, ich fühle Sinn
[Karl Adamek](https://karladamek.de/)
[0263](https://heilsame-lieder.de/?q=0263)
Shalama Bayta
[Gita Sophia Onnen](https://gitaonnen.de/)
[0262](https://heilsame-lieder.de/?q=0262)
All I Have to Do
Helen Knight
[0261](https://heilsame-lieder.de/?q=0261)
Ich bin getragen
[Anna-Sophia Schrenker](https://retribe.de/)
[0260](https://heilsame-lieder.de/?q=0260)
Ide were were
[Deva Premal & Miten](https://devapremalmiten.com/)
[0259](https://heilsame-lieder.de/?q=0259)
Tieo
[0258](https://heilsame-lieder.de/?q=0258)
Om bhur bhuva svaha / Gayatri Mantra
[0257a](https://heilsame-lieder.de/?q=0257a)
I am Ready
[Fia](https://fiasmusicofficial.com/), [Carolin Hartwig](https://soulsurfer.net/)
[0257](https://heilsame-lieder.de/?q=0257)
I am Ready
[Fia](https://fiasmusicofficial.com/)
[0256](https://heilsame-lieder.de/?q=0256)
Ek ong kar
[0255](https://heilsame-lieder.de/?q=0255)
Ich wünsch Dir tiefen Frieden
[Susanne Mössinger](https://sovielhimmel.de/)
[0254](https://heilsame-lieder.de/?q=0254)
Free My Mind
[0253](https://heilsame-lieder.de/?q=0253)
If Jah Jah is Standing by My Side
Tony Rebel
[0252](https://heilsame-lieder.de/?q=0252)
Águila
Ivan & Gianni
[0251](https://heilsame-lieder.de/?q=0251)
E Malama
Mark & Sharee Anderson
[0250](https://heilsame-lieder.de/?q=0250)
Ich bin du
[Jörg Eisfeld](https://jeisfeld.de/)
[0249](https://heilsame-lieder.de/?q=0249)
Ich wünsche mir Frieden
[Uta Reykers](https://utareykers.de/)
[0248](https://heilsame-lieder.de/?q=0248)
Verbunden (Wenn ich mich im anderen erkenne)
[Uta Reykers](https://utareykers.de/)
[0247](https://heilsame-lieder.de/?q=0247)
Heya Ho
[0246](https://heilsame-lieder.de/?q=0246)
Teyata Om Bekandze
[Uta Reykers](https://utareykers.de/)
[0245](https://heilsame-lieder.de/?q=0245)
Dich schickt der Himmel
Martina Weiler
[0244](https://heilsame-lieder.de/?q=0244)
Merci merci merci
[Klaus Nagel](https://sovielhimmel.de/)
[0243](https://heilsame-lieder.de/?q=0243)
Kali Ma, Durge Ma
[0242](https://heilsame-lieder.de/?q=0242)
I Honor My Blood
[0241](https://heilsame-lieder.de/?q=0241)
I Surrender to Love
[0240](https://heilsame-lieder.de/?q=0240)
Ich liebe mich, ich liebe dich
Abi im Einklang
[0239](https://heilsame-lieder.de/?q=0239)
Wie ein Adler im Wind
[0238](https://heilsame-lieder.de/?q=0238)
The Warrior of Light (Om namah shivaya)
[Engelbert](https://instagram.com/mystical.mystery)
[0237](https://heilsame-lieder.de/?q=0237)
Möge die Straße uns zusammenführen
[0236](https://heilsame-lieder.de/?q=0236)
Lokah Samasta (Om Shanti)
[0235](https://heilsame-lieder.de/?q=0235)
Like a Tree Drops All Leaves
[Lulu & Mischka](https://luluandmischka.com/)
[0234](https://heilsame-lieder.de/?q=0234)
Hanuman Bolo
[0233](https://heilsame-lieder.de/?q=0233)
Life is Just a Show
[Katharina Bossinger](https://healingsongs.de/)
[0232](https://heilsame-lieder.de/?q=0232)
Om Sahana Vavatu
[Deva Premal & Miten](https://devapremalmiten.com/)
[0231](https://heilsame-lieder.de/?q=0231)
May I Take Peaceful Steps
[Murshida Leilah Be](https://leilahbe.com/)
[0230](https://heilsame-lieder.de/?q=0230)
Way Yantee
Amrit Kirtan
[0229](https://heilsame-lieder.de/?q=0229)
Noyana
Colin Harrison
[0228](https://heilsame-lieder.de/?q=0228)
Divinity Inside of Me
[Anna-Sophia Schrenker](https://retribe.de/)
[0227](https://heilsame-lieder.de/?q=0227)
Shalom aleichem mal’achei hashalom
[0226](https://heilsame-lieder.de/?q=0226)
Hare Krishna
[0225](https://heilsame-lieder.de/?q=0225)
Ho Kasserin
[0224](https://heilsame-lieder.de/?q=0224)
Nigun 2
[0223](https://heilsame-lieder.de/?q=0223)
A Voice in the Wind (Tia)
Omer Gonen-Haela
[0222](https://heilsame-lieder.de/?q=0222)
Another world is not only possible (Hear Her Breathing)
Arundhaty Roy
[0221](https://heilsame-lieder.de/?q=0221)
Feel the Light in Yourself
[Joachim Goerke](https://joachimgoerke.de/)
[0220](https://heilsame-lieder.de/?q=0220)
Jay Ganesha Pahimam
[0219](https://heilsame-lieder.de/?q=0219)
Let the Way of the Heart Shine Through
[0218](https://heilsame-lieder.de/?q=0218)
In the Still of the Night (Jay Ma)
[0217](https://heilsame-lieder.de/?q=0217)
So It Goes
Orot Band
[0216](https://heilsame-lieder.de/?q=0216)
Om Sat Chit Ananda Parabrahma
[0215](https://heilsame-lieder.de/?q=0215)
Mitakuye Oyasin
[Claude Brame](https://terrenchantee.com/)
[0214](https://heilsame-lieder.de/?q=0214)
Teyata Om Bekandze
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0213](https://heilsame-lieder.de/?q=0213)
Lache in die Welt hinein
[Klaus Nagel](https://sovielhimmel.de/)
[0212](https://heilsame-lieder.de/?q=0212)
Om hrim sum suryaya namaha
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0211](https://heilsame-lieder.de/?q=0211)
One by One
[Michael Stillwater](https://innerharmony.com/)
[0210](https://heilsame-lieder.de/?q=0210)
Halleluja, gesegnet bin ich
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0209](https://heilsame-lieder.de/?q=0209)
I am the Light of My Soul
[0208](https://heilsame-lieder.de/?q=0208)
Om Gam Ganapataye Namaha
[Sam Garrett](https://samgarrettmusic.com/), [Mollie Mendoza](https://mollie-mendoza.com/)
[0207](https://heilsame-lieder.de/?q=0207)
Hari Om Namah Shivaya
[0206](https://heilsame-lieder.de/?q=0206)
Mitakuye Oyasin
[0205](https://heilsame-lieder.de/?q=0205)
Oh Fill My Heart
[0204](https://heilsame-lieder.de/?q=0204)
Am Grunde der Seele
[Joachim Goerke](https://joachimgoerke.de/)
[0203](https://heilsame-lieder.de/?q=0203)
Cacao de la vida
Vera La Fe
[0202](https://heilsame-lieder.de/?q=0202)
Ben Adam
Rabbi Kook
[0201](https://heilsame-lieder.de/?q=0201)
In the Light of Love
[Deva Premal & Miten](https://devapremalmiten.com/)
[0200](https://heilsame-lieder.de/?q=0200)
Om namo Kali Kali
Tane Mahuta
[0199](https://heilsame-lieder.de/?q=0199)
Humee Hum Brahm Hum (We Are One)
[Kevin James](https://kevinjamesmusic.com/)
[0198](https://heilsame-lieder.de/?q=0198)
Prayer for Peace
David Haas
[0197a](https://heilsame-lieder.de/?q=0197a)
Lass die Sonne in dein Herz
[Daniela Sauter de Beltré](https://daniela-sauter.de/)
[0197](https://heilsame-lieder.de/?q=0197)
Lass die Sonne in dein Herz
[Daniela Sauter de Beltré](https://daniela-sauter.de/)
[0196](https://heilsame-lieder.de/?q=0196)
Das Leben ist so bunt
[Joachim Goerke](https://joachimgoerke.de/)
[0195](https://heilsame-lieder.de/?q=0195)
Light of Your Grace
[Sam Garrett](https://samgarrettmusic.com/)
[0194](https://heilsame-lieder.de/?q=0194)
Augen zu
[0193](https://heilsame-lieder.de/?q=0193)
Hu Allah
[0192](https://heilsame-lieder.de/?q=0192)
Om Shri Ram, Jay Ram
[0191](https://heilsame-lieder.de/?q=0191)
Jay Jay Ma, Kali Durga
[Kevin James](https://kevinjamesmusic.com/)
[0190](https://heilsame-lieder.de/?q=0190)
Jaya Shiva Shankara
[0189](https://heilsame-lieder.de/?q=0189)
Andelele (Spirits Around)
[Erik Manouz](http://manouz.de/)
[0188](https://heilsame-lieder.de/?q=0188)
Om Ganesha om ganapati
[0187a](https://heilsame-lieder.de/?q=0187a)
Om namah Shivaya namah om (Haidakhandi)
[Philipp Stegmüller](https://mantra-singing-circle.de/), [Yopi Jay](https://yopi-music.com/), [Joachim Böttcher](https://joachim-boettcher.com/)
[0187](https://heilsame-lieder.de/?q=0187)
Om namah Shivaya namah om (Haidakhandi)
[Philipp Stegmüller](https://mantra-singing-circle.de/), [Yopi Jay](https://yopi-music.com/), [Joachim Böttcher](https://joachim-boettcher.com/)
[0186](https://heilsame-lieder.de/?q=0186)
Gobinday Mukanday
[0185](https://heilsame-lieder.de/?q=0185)
Lean on Me
[Katharina Bossinger](https://healingsongs.de/)
[0184](https://heilsame-lieder.de/?q=0184)
Wir sind verbunden
[Wolfgang Bossinger](https://healingsongs.de/)
[0183](https://heilsame-lieder.de/?q=0183)
Vertrau Dir
Margrit Rütte
[0182](https://heilsame-lieder.de/?q=0182)
Sinnenfeuer
[Jörg Eisfeld](https://jeisfeld.de/)
[0181](https://heilsame-lieder.de/?q=0181)
Abre las puertas de tu corazón al amor
[0180](https://heilsame-lieder.de/?q=0180)
Panduranga jaya vittale
[0179](https://heilsame-lieder.de/?q=0179)
Lass die Schönheit die wir lieben
Mevlana Rumi, [Wolfgang Bossinger](https://healingsongs.de/)
[0178](https://heilsame-lieder.de/?q=0178)
I’m Letting Go
[Jörg Eisfeld](https://jeisfeld.de/)
[0177](https://heilsame-lieder.de/?q=0177)
Trust (in the Unknown)
[Alexia Chellun](https://alexiachellun.com/)
[0176](https://heilsame-lieder.de/?q=0176)
Motherland
[Helen Yeomans](https://helenyeomans.co.uk/)
[0175](https://heilsame-lieder.de/?q=0175)
Sex Bomb
Tom Jones
[0174](https://heilsame-lieder.de/?q=0174)
I Release Control
[Alexa Sunshine Rose](https://alexasunshinerose.com/)
[0173](https://heilsame-lieder.de/?q=0173)
Angels are Singing
[0172](https://heilsame-lieder.de/?q=0172)
Körperzellensong
[0171](https://heilsame-lieder.de/?q=0171)
Every Little Cell
[0170](https://heilsame-lieder.de/?q=0170)
The Power is Here Now
[Alexia Chellun](https://alexiachellun.com/)
[0169](https://heilsame-lieder.de/?q=0169)
Colours in My Life
[Pete Josef](https://petejosefmusic.com/)
[0168](https://heilsame-lieder.de/?q=0168)
Du bist okay, genau so wie du bist
[Jörg Eisfeld](https://jeisfeld.de/)
[0167](https://heilsame-lieder.de/?q=0167)
Porqué te quiero tanto
[0166](https://heilsame-lieder.de/?q=0166)
Kranich am Himmel
[0165](https://heilsame-lieder.de/?q=0165)
Es gab eine Zeit
[0164](https://heilsame-lieder.de/?q=0164)
Am Feuer uns’rer Ahnen
[0163](https://heilsame-lieder.de/?q=0163)
Brenne um zu leuchten
Karunesh Frank Sarring
[0162](https://heilsame-lieder.de/?q=0162)
Walk the Beauty Way
[0161](https://heilsame-lieder.de/?q=0161)
Salaleo
[0160](https://heilsame-lieder.de/?q=0160)
Große Mutter
[Joachim Böttcher](https://joachim-boettcher.com/), Jan Luke, Elvira Tsekouras
[0159a](https://heilsame-lieder.de/?q=0159a)
Om namo narayani
[Edo & Jo](https://edoandjo.com/)
[0159](https://heilsame-lieder.de/?q=0159)
Om namo narayani
[Edo & Jo](https://edoandjo.com/), [Mandála Jurema](https://instagram.com/mandala.jurema), [Florian M. Litzlfelder](https://florian-michael-litzlfelder.de/)
[0158a](https://heilsame-lieder.de/?q=0158a)
Peace
[Eva Luna Benedetti](https://evaluna.ch/)
[0158](https://heilsame-lieder.de/?q=0158)
Peace for All Relations
[Eva Luna Benedetti](https://evaluna.ch/)
[0157](https://heilsame-lieder.de/?q=0157)
Om mani padme hum
[0156](https://heilsame-lieder.de/?q=0156)
I Hear the Silence
[0155](https://heilsame-lieder.de/?q=0155)
Joy without Reason
[Jörg Eisfeld](https://jeisfeld.de/)
[0154](https://heilsame-lieder.de/?q=0154)
Ich habe das Recht auf Distanz
[Jörg Eisfeld](https://jeisfeld.de/)
[0153](https://heilsame-lieder.de/?q=0153)
No Need to Judge
[Jörg Eisfeld](https://jeisfeld.de/)
[0152](https://heilsame-lieder.de/?q=0152)
Ich bin klar in meiner Absicht
[Jörg Eisfeld](https://jeisfeld.de/)
[0151](https://heilsame-lieder.de/?q=0151)
I Celebrate My Life
[Jörg Eisfeld](https://jeisfeld.de/)
[0150](https://heilsame-lieder.de/?q=0150)
Still
[Jörg Eisfeld](https://jeisfeld.de/)
[0149](https://heilsame-lieder.de/?q=0149)
I´ll Be Trying
[Jörg Eisfeld](https://jeisfeld.de/)
[0148](https://heilsame-lieder.de/?q=0148)
I Wanna Grow
[Jörg Eisfeld](https://jeisfeld.de/)
[0147](https://heilsame-lieder.de/?q=0147)
Listen to the Voice of Love
[Ben van Haeff](https://life-lover.com/)
[0146](https://heilsame-lieder.de/?q=0146)
Allah Hu
[0145](https://heilsame-lieder.de/?q=0145)
Om mani peme hung
[0144](https://heilsame-lieder.de/?q=0144)
Allowing
[Alexia Chellun](https://alexiachellun.com/)
[0143](https://heilsame-lieder.de/?q=0143)
I Surrender
[Alexia Chellun](https://alexiachellun.com/)
[0142](https://heilsame-lieder.de/?q=0142)
Forever Shining, Forever Flowing
[0141](https://heilsame-lieder.de/?q=0141)
Maybe I Have Seen You Before
[0140](https://heilsame-lieder.de/?q=0140)
May I Be Safe (Metta Meditation)
[0139](https://heilsame-lieder.de/?q=0139)
How Could Anyone
[Shaina Noll](https://shainanoll.com/)
[0138](https://heilsame-lieder.de/?q=0138)
Lokah Samasta
[0137](https://heilsame-lieder.de/?q=0137)
We are Loved
[0136](https://heilsame-lieder.de/?q=0136)
Sei die du bist
[0135](https://heilsame-lieder.de/?q=0135)
Ra Ma Da Sa
[Snatam Kaur Khalsa](https://snatamkaur.com/)
[0134](https://heilsame-lieder.de/?q=0134)
Gloria, Gloria in excelsis Deo
[Taizé](https://taize.fr/)
[0133](https://heilsame-lieder.de/?q=0133)
Spirit Lead Me
[Hillsong United](https://hillsong.com/united)
[0132](https://heilsame-lieder.de/?q=0132)
Lo Yisa Goy
traditionell hebräisch
[0131](https://heilsame-lieder.de/?q=0131)
Nadscho
Upik
[0130](https://heilsame-lieder.de/?q=0130)
La ilaha il Allah
[0129](https://heilsame-lieder.de/?q=0129)
He Kehau
Lila Flood
[0128](https://heilsame-lieder.de/?q=0128)
Samba Sadashiva
[0127](https://heilsame-lieder.de/?q=0127)
Asatoma
[Kevin James](https://kevinjamesmusic.com/)
[0126](https://heilsame-lieder.de/?q=0126)
Temple of My Heart
[Kevin James](https://kevinjamesmusic.com/)
[0125](https://heilsame-lieder.de/?q=0125)
I Just Close My Eyes
[0124](https://heilsame-lieder.de/?q=0124)
I Choose to Live in Love (Lakshmi)
[Sam Garrett](https://samgarrettmusic.com/)
[0123](https://heilsame-lieder.de/?q=0123)
Atme den Wind
Piti Lion
[0122](https://heilsame-lieder.de/?q=0122)
Machi
[Peia](https://peiasong.com/)
[0121](https://heilsame-lieder.de/?q=0121)
New Day’s Dawn
[Lulu & Mischka](https://luluandmischka.com/)
[0120](https://heilsame-lieder.de/?q=0120)
Ich liebe das Leben
[0119](https://heilsame-lieder.de/?q=0119)
Aye kerunene
[0118](https://heilsame-lieder.de/?q=0118)
Bam Bhole
[0117](https://heilsame-lieder.de/?q=0117)
I am a Tower of Strength
[0116](https://heilsame-lieder.de/?q=0116)
Yanna ho hey
Kailash Kokopelli
[0115](https://heilsame-lieder.de/?q=0115)
Earth in my Body
[0114](https://heilsame-lieder.de/?q=0114)
Hold Me
[Nina Wise](https://ninawise.com/)
[0113](https://heilsame-lieder.de/?q=0113)
Hey wani wani wani heyo
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0112](https://heilsame-lieder.de/?q=0112)
Water Prayer
[0111](https://heilsame-lieder.de/?q=0111)
Abendlied
[Gila Antara](http://www.gila-antara.co.uk/)
[0110](https://heilsame-lieder.de/?q=0110)
Above and Below
Kailash Kokopelli
[0109](https://heilsame-lieder.de/?q=0109)
Hare Krishna
[0108](https://heilsame-lieder.de/?q=0108)
Jay Hanuman
[0107](https://heilsame-lieder.de/?q=0107)
Jay shri ma, Kali Kali ma
[0106](https://heilsame-lieder.de/?q=0106)
Come into the Light of Love
[0105a](https://heilsame-lieder.de/?q=0105a)
We are as God created us
[Michael Stillwater](https://innerharmony.com/)
[0105](https://heilsame-lieder.de/?q=0105)
We are as God created us
[Michael Stillwater](https://innerharmony.com/)
[0104](https://heilsame-lieder.de/?q=0104)
May All Beings Experience Love
[Uta Reykers](https://utareykers.de/)
[0103](https://heilsame-lieder.de/?q=0103)
He Yama Yo
Lakota
[0102](https://heilsame-lieder.de/?q=0102)
Halt an, wo läufst du hin?
Angelus Silesius, [Philipp Stegmüller](https://mantra-singing-circle.de/)
[0101](https://heilsame-lieder.de/?q=0101)
Der erste Friede
[Iria Schärer](https://iria.de/)
[0100](https://heilsame-lieder.de/?q=0100)
Wenn nicht wir, wer dann?
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0099](https://heilsame-lieder.de/?q=0099)
La ilaha il Allah
[0098](https://heilsame-lieder.de/?q=0098)
Gott ist in mir
[Christian Bergmann](https://christian-bergmann.de/)
[0097](https://heilsame-lieder.de/?q=0097)
Sa Ta Na Ma
[0096](https://heilsame-lieder.de/?q=0096)
We’ve Got All the Love (Blessed Be)
[0095](https://heilsame-lieder.de/?q=0095)
Peace Comes from Within
[Jörg Eisfeld](https://jeisfeld.de/)
[0094](https://heilsame-lieder.de/?q=0094)
Lokah Samasta
[Christian Bergmann](https://christian-bergmann.de/)
[0093](https://heilsame-lieder.de/?q=0093)
Ich öffne mich
[Joachim Goerke](https://joachimgoerke.de/)
[0092](https://heilsame-lieder.de/?q=0092)
Om namo narayanaya
[Deva Premal & Miten](https://devapremalmiten.com/)
[0091](https://heilsame-lieder.de/?q=0091)
Meine Füße fest auf Mutter Erde
[Amei Helm](http://lied-der-erde.de/)
[0090](https://heilsame-lieder.de/?q=0090)
Beweg dich leise
[Amélie Mehru](https://ameliemehru.com/)
[0089](https://heilsame-lieder.de/?q=0089)
Tanze und lebe, sei frei
[Jörg Eisfeld](https://jeisfeld.de/)
[0088](https://heilsame-lieder.de/?q=0088)
Lebe jeden Tag
[Wolfgang Bossinger](https://healingsongs.de/)
[0087](https://heilsame-lieder.de/?q=0087)
Mash’Allah
Nasrudin
[0086](https://heilsame-lieder.de/?q=0086)
I am Here
[Michael Stillwater](https://innerharmony.com/)
[0085](https://heilsame-lieder.de/?q=0085)
Führ mich mein Herz
[Barbara Vimala Moos](https://instagram.com/barbara_moos)
[0084](https://heilsame-lieder.de/?q=0084)
Om namo amitabhaya
[0083](https://heilsame-lieder.de/?q=0083)
Jay shiva shankara
[Pari & Satyaa](https://satyaa-pari.com/)
[0082a](https://heilsame-lieder.de/?q=0082a)
Tall Trees
[0082](https://heilsame-lieder.de/?q=0082)
Strong Wind
[0081](https://heilsame-lieder.de/?q=0081)
I Step into the Flow
[0080a](https://heilsame-lieder.de/?q=0080a)
Pacha Mama (Blues)
Ronny Hickel, [Carola Fürbaß](https://bodyvoicehealing.com/)
[0080](https://heilsame-lieder.de/?q=0080)
Pacha Mama
Ronny Hickel
[0079](https://heilsame-lieder.de/?q=0079)
Möge Heilung geschehen
[Amei Helm](http://lied-der-erde.de/)
[0078](https://heilsame-lieder.de/?q=0078)
Om mani padme hum, om shanti om
Michaele Hustedt
[0077](https://heilsame-lieder.de/?q=0077)
Namaste
[Regine Steffens](https://regine-steffens.de/)
[0076](https://heilsame-lieder.de/?q=0076)
Hare Krishna (Govinda Gopala)
Herbert Hofmann
[0075](https://heilsame-lieder.de/?q=0075)
Om mani padme hum
[Philipp Stegmüller](https://mantra-singing-circle.de/)
[0074](https://heilsame-lieder.de/?q=0074)
Werde ruhig, mein Herz
Julie Voelter
[0073](https://heilsame-lieder.de/?q=0073)
Ho’oponopono
[0072](https://heilsame-lieder.de/?q=0072)
Wenn du jemals vergisst
Antje Lamers
[0071](https://heilsame-lieder.de/?q=0071)
Blessed We Are
[Peia](https://peiasong.com/)
[0070](https://heilsame-lieder.de/?q=0070)
See Me Beautiful
[Red Grammer](https://redgrammer.com/), Kathy Grammer
[0069](https://heilsame-lieder.de/?q=0069)
Suddhosi Buddhosi / You Are Forever Pure
[Shimshai](https://shimshai.com/)
[0068](https://heilsame-lieder.de/?q=0068)
Feel the Blessing
[Michael Stillwater](https://innerharmony.com/)
[0067](https://heilsame-lieder.de/?q=0067)
All I Ask of You
[0066a](https://heilsame-lieder.de/?q=0066a)
The Ocean
[Starhawk](https://starhawk.org/), Dalaney Johnson, [Philipp Stegmüller](https://mantra-singing-circle.de/)
[0066](https://heilsame-lieder.de/?q=0066)
The Ocean
[Starhawk](https://starhawk.org/), Dalaney Johnson
[0065](https://heilsame-lieder.de/?q=0065)
Thy Light is in All Forms
Hazrat Inayat Khan
[0064](https://heilsame-lieder.de/?q=0064)
Nigun 1
[0063](https://heilsame-lieder.de/?q=0063)
Heart of the Mother
[Michael Stillwater](https://innerharmony.com/)
[0062](https://heilsame-lieder.de/?q=0062)
Gloria in Excelsis Deo (Kanon)
[Taizé](https://taize.fr/), Jacques Berthier
[0061a](https://heilsame-lieder.de/?q=0061a)
Heartbeat
[Cataleya Fay](https://cataleyafay.com/)
[0061](https://heilsame-lieder.de/?q=0061)
Mother I Feel You
[0060](https://heilsame-lieder.de/?q=0060)
Segen sei mit euch
[Ali Schmidt](https://eli-berlin.de/)
[0059](https://heilsame-lieder.de/?q=0059)
Mögen alle Wesen glücklich sein
Martina Weiler
[0058](https://heilsame-lieder.de/?q=0058)
Ich spüre hin
[Klaus Nagel](https://sovielhimmel.de/)
[0057](https://heilsame-lieder.de/?q=0057)
Ich bin, der/die ich bin
[Marina Kaiser](https://marina-kaiser.de/)
[0056](https://heilsame-lieder.de/?q=0056)
Gut Nacht / Schlaf gut
[Brigitte Schmitz](https://chanting.de/)
[0055](https://heilsame-lieder.de/?q=0055)
When We Are Gone
Anne Hill, [Starhawk](https://starhawk.org/)
[0054](https://heilsame-lieder.de/?q=0054)
Up Above My Head
Sister Rosetta Tharpe
[0053](https://heilsame-lieder.de/?q=0053)
Love Will Take You Home
[Susanne Mössinger](https://sovielhimmel.de/)
[0052](https://heilsame-lieder.de/?q=0052)
Bobo malé
[Sobonfu É. Somé](https://sobonfu.com/)
[0051](https://heilsame-lieder.de/?q=0051)
Aye Aye
[0050](https://heilsame-lieder.de/?q=0050)
Shalom (Kanon)
[Ali Schmidt](https://eli-berlin.de/)
[0049](https://heilsame-lieder.de/?q=0049)
Froh zu sein bedarf es wenig (Kanon)
August Mühling
[0048](https://heilsame-lieder.de/?q=0048)
Es tönen die Lieder / Himmel und Erde (Kanon)
[0047](https://heilsame-lieder.de/?q=0047)
We Shall Overcome
Zilphia Hart, Frank Hamilton, Guy Carawan, Pete Seeger
[0046](https://heilsame-lieder.de/?q=0046)
Through the Eyes of Love
[Barbara Swetina & The Findhorn Minstrels](https://sacredsongs.net/)
[0045](https://heilsame-lieder.de/?q=0045)
Present Moment, Wonderful Moment
[Barbara Swetina & The Findhorn Minstrels](https://sacredsongs.net/)
[0044a](https://heilsame-lieder.de/?q=0044a)
One Breath
Abhi Ktori-Carter, [Cataleya Fay](https://cataleyafay.com/)
[0044](https://heilsame-lieder.de/?q=0044)
One Breath
Abhi Ktori-Carter
[0043](https://heilsame-lieder.de/?q=0043)
In the Arms of Love (I am Here)
[Mark Fox](https://markfoxtruevoice.com/)
[0042](https://heilsame-lieder.de/?q=0042)
In, Out, Deep, Slow
Thich Nhat Hanh, Plum Village
[0041](https://heilsame-lieder.de/?q=0041)
Hold on
[0040](https://heilsame-lieder.de/?q=0040)
Be Still, My Soul
[Mark Fox](https://markfoxtruevoice.com/)
[0039](https://heilsame-lieder.de/?q=0039)
Jay Ananda ma
[0038](https://heilsame-lieder.de/?q=0038)
Aad gureh nameh
[0037](https://heilsame-lieder.de/?q=0037)
Ruh Allah (Quodlibet)
Allaudin Ottinger
[0036](https://heilsame-lieder.de/?q=0036)
Come, Come Whoever You Are
Mevlana Rumi
[0035](https://heilsame-lieder.de/?q=0035)
Asalaam asalaam
Niakomo Clark
[0034](https://heilsame-lieder.de/?q=0034)
Amen
[0033](https://heilsame-lieder.de/?q=0033)
Wechselnde Pfade (Kanon)
[0032](https://heilsame-lieder.de/?q=0032)
Tief in die Erde (Kanon)
[0031](https://heilsame-lieder.de/?q=0031)
Stille
[Anne Tusche](https://annesongs.de/)
[0030](https://heilsame-lieder.de/?q=0030)
Öffne dein Herz (Kanon)
Michaele Hustedt
[0029](https://heilsame-lieder.de/?q=0029)
Es gibt immer einen Weg
[Iria Schärer](https://iria.de/)
[0028](https://heilsame-lieder.de/?q=0028)
Bele Mama
Ya'Beppo
[0027](https://heilsame-lieder.de/?q=0027)
Shalom (Kanon 2)
[Ali Schmidt](https://eli-berlin.de/)
[0026](https://heilsame-lieder.de/?q=0026)
Shalom (Kanon 1)
[Joachim Goerke](https://joachimgoerke.de/)
[0025](https://heilsame-lieder.de/?q=0025)
Return Again
Ronnie Kahn, Shlomo Carlebach
[0024](https://heilsame-lieder.de/?q=0024)
So’ham
[0023](https://heilsame-lieder.de/?q=0023)
Mixed Mantra
[Ali Schmidt](https://eli-berlin.de/)
[0022a](https://heilsame-lieder.de/?q=0022a)
Om Namah Shivaya / Into Your Hands
[Peter Makena](https://petermakena.com/)
[0022](https://heilsame-lieder.de/?q=0022)
Into Your Hands
[Peter Makena](https://petermakena.com/)
[0021](https://heilsame-lieder.de/?q=0021)
He’s Got the Whole World
[0020](https://heilsame-lieder.de/?q=0020)
Amazing Grace
John Newton, James P. Carrell, David S. Clayton
[0019a](https://heilsame-lieder.de/?q=0019a)
Evening Rise
Native American
[0019](https://heilsame-lieder.de/?q=0019)
Evening Rise
Native American, [Ali Schmidt](https://eli-berlin.de/)
[0018](https://heilsame-lieder.de/?q=0018)
Om mani padme hum
[0017](https://heilsame-lieder.de/?q=0017)
Shalom chaverim
traditionell hebräisch
[0016](https://heilsame-lieder.de/?q=0016)
This Little Light of Mine
[0015](https://heilsame-lieder.de/?q=0015)
Kum Ba Yah, My Lord
[0014](https://heilsame-lieder.de/?q=0014)
Joy on earth
[Ali Schmidt](https://eli-berlin.de/)
[0013](https://heilsame-lieder.de/?q=0013)
Magnificence / Hallelujah
Kabir, [Peter Makena](https://petermakena.com/), [Miten](https://devapremalmiten.com/)
[0012](https://heilsame-lieder.de/?q=0012)
Fly High / Om shri rama
[Peter Makena](https://petermakena.com/), Martyn Phillips
[0011](https://heilsame-lieder.de/?q=0011)
Bless the Lord, my Soul
[Taizé](https://taize.fr/), Jacques Berthier
[0010](https://heilsame-lieder.de/?q=0010)
The River is Flowing / Shima shima
[0009](https://heilsame-lieder.de/?q=0009)
Shri Ram jay Ram – Yes
[Pari Laskaridis](https://satyaa-pari.com/)
[0008](https://heilsame-lieder.de/?q=0008)
Om Tare Tuttare
[Praful](http://prafulmusic.com/)
[0007](https://heilsame-lieder.de/?q=0007)
Om mani padme hum
[0006](https://heilsame-lieder.de/?q=0006)
Namaste
Katrin Grassmann
[0005](https://heilsame-lieder.de/?q=0005)
Gopala
Hindi-Bhajan
[0004](https://heilsame-lieder.de/?q=0004)
Salaam mevlana salaam / Shalom alechem shalom
[0003](https://heilsame-lieder.de/?q=0003)
Ishq’Allah
[0002](https://heilsame-lieder.de/?q=0002)
Hevenu shalom alechem
trad. hebräisch
[0001](https://heilsame-lieder.de/?q=0001)
Hallelujah
[Taizé](https://taize.fr/)
[1000](https://heilsame-lieder.de/?q=1000)
Hallelujah
[Leonard Cohen](https://leonardcohen.com/)
[1001](https://heilsame-lieder.de/?q=1001)
What a Wonderful World
George David Weiss, Bob Thiele
[1002](https://heilsame-lieder.de/?q=1002)
Enjoy the Silence
[Martin L. Gore](http://martingore.com/)
[1003](https://heilsame-lieder.de/?q=1003)
Time after Time
[Cyndi Lauper](https://cyndilauper.com/), Rob Hyman
[1004](https://heilsame-lieder.de/?q=1004)
Imagine
[John Lennon](https://johnlennon.com/)
[1005](https://heilsame-lieder.de/?q=1005)
You Raise Me Up
Rolf Løvland, Brendan Graham
[1006](https://heilsame-lieder.de/?q=1006)
Rivers of Babylon
Brent Dowe, Trevor McNaughton
[1007](https://heilsame-lieder.de/?q=1007)
Sounds of Silence
[Paul Simon](https://paulsimon.com/)
[1008](https://heilsame-lieder.de/?q=1008)
All I Have to Do is Dream
Felice Bryant, Boudleaux Bryant
[1009](https://heilsame-lieder.de/?q=1009)
Like Strangers
Boudleaux Bryant
[1010](https://heilsame-lieder.de/?q=1010)
Ode an die Freude
Friedrich Schiller, Ludwig van Beethoven
[1011](https://heilsame-lieder.de/?q=1011)
My Way
Claude François, Jacques Revaux, Gilles Thibaut, [Paul Anka](https://paulank.com/)
[1012](https://heilsame-lieder.de/?q=1012)
Lay Back in the Arms of Someone
Nicky Chinn, Mike Chapman`;

function cleanMarkdown(str) {
  if (!str) return '';
  return str.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
}

function parseMantraList(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const items = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    const idMatch = line.match(/^\[([0-9a-zA-Z]+)\]\((https:\/\/heilsame-lieder\.de\/\?q=[0-9a-zA-Z]+)\)/);
    
    if (idMatch) {
      const code = idMatch[1];
      const sourceUrl = idMatch[2];
      i++;
      let title = '';
      if (i < lines.length && !lines[i].startsWith('[')) {
        title = lines[i];
        i++;
      } else if (i < lines.length && lines[i].startsWith('[')) {
        // could be title or next item
        title = cleanMarkdown(lines[i]);
        i++;
      }
      
      let artist = 'Traditionell / Heilsame Lieder';
      if (i < lines.length && !lines[i].match(/^\[([0-9a-zA-Z]+)\]/)) {
        artist = cleanMarkdown(lines[i]);
        i++;
      }
      
      items.push({
        id: 'mantra-' + code,
        code: code,
        title: title || 'Mantra ' + code,
        artist: artist || 'Traditionell',
        sourceUrl: sourceUrl,
        isMantra: true,
        category: 'Mantren & Heilsame Lieder'
      });
    } else {
      i++;
    }
  }
  return items;
}

const parsed = parseMantraList(rawText);
console.log('Parsed total mantras:', parsed.length);
fs.writeFileSync(path.join(__dirname, 'mantras_data.json'), JSON.stringify(parsed, null, 2), 'utf8');
