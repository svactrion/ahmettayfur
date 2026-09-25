# GrammarLens case study v2 — Turkish translation (approved)

Approved by the owner on 25 September 2026. This file is the only source for the TR case study text. Do not rephrase anything; apply it verbatim.

## How to read this file

- Every entry is keyed to the EN key path in `src/content/caseStudy.js` (`caseStudyCopy.en.…`). The TR object must get the same structure and the same block order as EN, so each TR string goes to the same path under `caseStudyCopy.tr`.
- Block indices that are not listed here (e.g. `sections[1].blocks[1]`) are figures; they keep the same position in TR.
- `[measured]` and `[estimated]` mark the provenance tag slots (`${measured}` / `${estimated}` in the EN source). Keep them in exactly these positions. The tag labels themselves read `ölçüldü` / `tahmin` in TR.
- `<strong>` stays as in EN.
- Numbers stay in EN format ($0.034, 15%, 2,048, 3.5). Dates use Turkish month names.
- Product terms stay in English: Daily Test, Topic Practice, Monthly Climb, Premium, "Practice this", "Back to topics", "Start my climb", "See Premium", "Get started", "come back tomorrow", "unlimited". Screen names Review and Home stay in English.

## Terms used everywhere

| EN | TR |
|---|---|
| measured / estimated (provenance tags) | ölçüldü / tahmin |
| First framing / Actual problem (Reframe labels) | İlk bakış / Asıl problem |
| How I'll know. | Nasıl anlayacağım. |
| What it cost. | Maliyeti. |
| Show chart data | Grafik verisini göster |
| paywall | paywall |
| case study | case study |

## Header and aside

| EN key | TR |
|---|---|
| meta.title | GrammarLens case study — Ahmet Emin Tayfur |
| meta.description | GrammarLens'i geliştirmek: bir haftalık MVP'den App Store'a, her yapay zekâ çağrısının bir fiyatı varken problemi doğru tanımlamak. |
| title | GrammarLens'i geliştirmek |
| subtitle | Bir haftalık MVP'den App Store'a: her yapay zekâ çağrısının bir fiyatı varken problemi doğru tanımlamak. |
| backLinkText | Ürüne dön |
| endLinkText | Ürün sayfası |
| aside.label | Case study |
| aside.lines[0] | Tek kişilik proje. |
| aside.lines[1] | Temmuz–Eylül 2026. |
| aside.lines[2] | Araştırma, PRD, geliştirme, test, iterasyon, App Store başvurusu. |
| aside.status | 24 Eylül 2026'da App Store incelemesine gönderildi. Henüz onaylanmadı. |
| aside.updated | Eylül 2026'da güncellendi. Bu sayfanın önceki sürümü yalnızca MVP'yi anlatıyordu. |

## Summary

**summary.label:** Özet

**summary.blocks[0].html**
GrammarLens; İngilizceyi oyunlar, diziler ve arkadaşları sayesinde akıcı konuşur hâle gelmiş ama IELTS gibi bir sınavın istediği dilbilgisini güvenle uygulayamayanlar için bir iOS uygulaması. Kullanıcının kendi hatalarından yola çıkarak alıştırma üretiyor ve bu hataları kural adlarıyla değil, sade bir dille açıklıyor.

**summary.blocks[1].html**
Her şeyi tek başıma yaptım: araştırmayı, PRD'yi, bütün ürün kararlarını ve kodu. Kodu, yazılı karar raporlarıyla yönlendirdiğim yapay zekâ kodlama ajanları yazdı. Proje Temmuz 2026'da, yedi kişiyle test edilen bir haftalık bir MVP olarak başladı. Sonraki iki ayda bir abonelik ürününe dönüştü: cihazda puanlanan ücretsiz bir Daily Test, bir yapay zekâ modelinin üretip puanladığı ücretli Topic Practice ve bunların üzerinde aylık bir alışkanlık katmanı.

**summary.blocks[2].html**
1.0 sürümü 24 Eylül 2026'da App Store incelemesine gönderildi. Henüz onaylanmadı ve elimde kullanıcı verisi yok. Bu yüzden bu sayfa sonuçların değil, kararların kaydı.

**summary.blocks[3].html**
Geriye dönüp baktığımda, değerli olan nadiren bir problemi daha hızlı çözmekti; çoğu zaman önümdeki problemin asıl problem olmadığını fark etmekti. Aşağıdaki her karar aynı yapıyı izliyor: problem ilk bakışta neye benziyordu, aslında ne çıktı, neyi seçtim, bunun bedeli ne oldu ve yanıldıysam bunu nasıl anlayacağım. Her rakam "ölçüldü" ya da "tahmin" olarak işaretli.

## Section labels and headings

| EN key | TR |
|---|---|
| sections[0].label | Araştırma |
| sections[0].heading | 1. Araştırmanın çürüttüğü varsayım |
| sections[1].label | Maliyet |
| sections[1].heading | 2. Her çağrının bir fiyatı varken alınan kararlar |
| sections[2].label | Paywall |
| sections[2].heading | 3. Parayı nerede istemeli |
| sections[3].label | Geriye bakış |
| sections[3].heading | 4. Baştan yapsam neyi farklı yapardım |
| sections[4].label | Durum |
| sections[4].heading | 5. Mevcut durum ve nasıl anlayacağım |

## Section 1

**sections[0].blocks[0].html**
İşe kullanıcı olarak başladım. IELTS'e hazırlanırken hep aynı birkaç hatayı yapıyordum: gerund mu infinitive mi, modal'lar, modal'ların geçmiş biçimleri. Doğru bir cümleyi sezgiyle kurabiliyor ama neden doğru olduğunu açıklayamıyordum. Akıcılık dilin içinde yaşayarak gelmişti; dilbilgisi bilgisi ise örtük kalmıştı. IELTS ise açık olanını istiyor.

**sections[0].blocks[1].html**
Bu bana bir problem tanımı verdi, ama bir ürün vermedi. İlk sürümüm, yaptığımı fark etmediğim bir varsayımı içinde taşıyordu: dilbilgisi kuralının adını vermek bir özelliktir. Uygulama kural adlarını ana etiket olarak öne çıkarıyordu.

**sections[0].blocks[2].html**
Yedi kişi buna katılmadı: dört görüşme ve üç kullanılabilirlik testi. Görüşmelerden biri kendimleydi; bunu PRD'de belirttim, burada da belirtiyorum. Bir katılımcı, kendisine "Past Perfect Continuous kullan" denmesinin hiçbir şey ifade etmediğini söyledi, oysa bu yapıyı her gün kullanıyor. Bir başkası, "noun clause" gibi terimlerin anlattıkları hatadan daha zor anlaşıldığını söyledi.

**sections[0].blocks[3].first:** Öğrenenler dilbilgisi kurallarını bilmiyor.
**sections[0].blocks[3].actual:** Kuralları zaten kullanıyorlar. Engel olan, kuralların adları.

**sections[0].blocks[4].html**
Ben de bunu tersine çevirdim. Önce sade dilde açıklama geliyor; kural adı, isteyenler için ikincil bir alt yazıya indi. Ardından yapılan üç kullanılabilirlik testinde üç katılımcının üçü de, sorulmadan, sade dildeki geri bildirimi övdü. Projenin en güçlü ve en çok tekrarlanan bulgusu bu.

**sections[0].blocks[5].html**
Aynı turlar ikinci bir varsayımı da çürüttü. Soru karışımım çoğunlukla boşluk doldurma ve çoktan seçmeliydi, yani geliştirmesi ve puanlaması en kolay biçimler. Yedi kişiden beşi bunları istemedi. Bir katılımcı bunu benim gerekçemden daha iyi açıkladı: seçenekler olsa tahmin edeceğini, seçenekler olmadığında ise gerçekten bildiğini kanıtlamak zorunda kaldığını söyledi.

**sections[0].blocks[6].html**
Serbest metin cevaplarını puanlamak hem daha pahalı hem de doğru yapması daha zor. Yine de onları tuttum, çünkü kanıtlar ucuz biçimin yanlış şeyi ölçtüğünü söylüyordu.

**sections[0].blocks[7].html**
Yedi kişi bir örneklem değil. Ama hangi yönde yanıldığımı görmeme yetti ve o aşamada ihtiyacım olan da buydu.

## Section 2

**sections[1].blocks[0].html**
GrammarLens, ürettiği her alıştırma ve puanladığı her cevap için bir dil modeline çağrı yapıyor. Bu da maliyeti bir mühendislik ayrıntısı olmaktan çıkarıp bir ürün kısıtına dönüştürüyor. Problemi doğru tanımlamanın bu kadar önemli olmasının sebebi de bu: bu üründe yanlış bir çerçeve sadece daha kötü bir özellik değil, her ay gelen bir fatura demek.

**sections[1].blocks[2].text:** Neyi ücretsiz vermeli

**sections[1].blocks[3].first:** Paywall'dan önce kaç ücretsiz oturum olmalı?
**sections[1].blocks[3].actual:** Ürünün hangi parçaları, her kullanıldığında para harcatıyor?

**sections[1].blocks[4].html**
İlk soruya genelde verilen cevap, ücretli ürünün sınırlı bir sürümüdür. Ama Topic Practice her oturumda dil modeline iki kez çağrı yapıyor: bir kez üretmek, bir kez puanlamak için. Ücretsiz ve sınırsız bir sürümde maliyet kullanıcı sayısıyla büyür, gelir ise hiç gelmez. Günde 100 kullanıcıda bu, ayda kabaca $90–270 ediyor [estimated]; o dönem çıkardığım kaba bir rakam. Her şeyin önüne konan katı bir paywall'ın sorunu ise tam tersiydi: hiç kimse, bütün test kullanıcılarının övdüğü sade dildeki geri bildirimle karşılaşmazdı.

**sections[1].blocks[5].html**
Bu yüzden sınırı olan tek bir mod yerine yapısal olarak farklı iki mod kurdum. Ücretsiz Daily Test tek bir üretim çağrısı yapıyor ve cevapları model kullanmadan cihazda puanlıyor. Ücretli ürün ise modelin ürettiği ve puanladığı Topic Practice.

**sections[1].blocks[6].html**
İki hafta sonra, Review ekranındaki bir hatadan ulaşılabilen, günde bir ücretsiz Topic Practice oturumu ekledim. Ürünü satan şey geri bildirim; o oturum olmasa ücretsiz kullanıcı bunu hiç görmezdi.

**sections[1].blocks[7].html**
Bu tek oturum, aktif bir ücretsiz kullanıcının maliyetini iki katından fazlasına çıkarıyor: ayda yaklaşık $0.70–0.84 iken yaklaşık $1.72–1.86 oluyor. Daily Test kısmı ölçülmüş token sayılarına dayanıyor [measured]; pratik oturumu ise hâlâ bir tahmin [estimated].

**sections[1].blocks[9].html**
<strong>Nasıl anlayacağım.</strong> İki analitik olayı, ücretsiz bir kullanıcının bu oturumu ne zaman kullandığını ve sınıra ne zaman ulaştığını kaydediyor. Dört haftanın sonunda soru basit: bu oturumu kullanan ücretsiz kullanıcılar, kullanmayanlardan daha sık aboneye dönüşüyor mu? Dönüşmüyorsa bu hak azaltılır. Kodda bu tek bir sabit.

**sections[1].blocks[10].text:** Orada olmayan paywall

**sections[1].blocks[11].first:** Review ekranı, kullanıcının Premium olup olmadığını kontrol etmeyi unutmuş.
**sections[1].blocks[11].actual:** Kontrol paranın harcandığı yerde değil, navigasyonda duruyordu.

**sections[1].blocks[12].html**
15 Eylül'de bir cihaz testi, ücretsiz bir kullanıcının ücretli pratiğe ulaşabildiğini gösterdi. Review ekranında zayıf bir noktaya, ardından "Practice this"e dokunmak, hiçbir abonelik kontrolü yapmadan gerçek ve faturalanan bir üretim başlatıyordu. Bu riski on gün önce fark etmiş, not almış ve ertelemiştim.

**sections[1].blocks[13].html**
Hızlı çözüm, kontrolün bir kopyasını da Review ekranına koymaktı. Ama Home ekranındaki kilitli kartlar yalnızca bir navigasyon korumasıydı: dokunuşu durduruyor, para harcatan şeyi korumuyordu. Uygulamada pratik seti üreten tek bir fonksiyon var. Kontrol bu fonksiyonun içine taşındı. Fonksiyon artık abonelik servisini, çağıranın unutabileceği isteğe bağlı bir bayrak olarak değil, zorunlu bir bağımlılık olarak istiyor. Henüz var olmayanlar da dahil, her yol aynı kapıdan geçiyor.

**sections[1].blocks[14].html**
Bu yaklaşım bir hafta sonra karşılığını verdi. Apple'ın App Review kuralları, kişisel veriler üçüncü taraf bir yapay zekâya gitmeden önce açık izin alınmasını istiyor. İzin ekranı aynı fonksiyona, aynı kapının önüne yerleşti; bütün giriş noktalarını yeniden aramam gerekmedi.

**sections[1].blocks[15].html**
<strong>Maliyeti.</strong> Bilinen bir açıkla geçen on gün; üstelik iki ekranı da kapsayan bir test yoktu. <strong>Nasıl anlayacağım.</strong> Bu konu ölçümle değil, yapıyla ilgili: iki giriş noktasının da artık kapıyı sınayan testleri var.

**sections[1].blocks[16].text:** Aslında bir kâr marjı olan sınır

**sections[1].blocks[17].first:** İki sınır çakışıyor. Sunucu sınırını mı yükseltmeli, oturum sınırını mı düşürmeli?
**sections[1].blocks[17].actual:** Planlanan sınırda, yoğun kullanan bir abone ödediğinden fazlasına mal oluyor.

**sections[1].blocks[18].html**
Premium günde 10 pratik oturumuna izin veriyordu. Her oturum iki sunucu çağrısı kullanıyor; API anahtarını koruyan proxy ise cihaz başına günde 15 çağrıya izin veriyor. Yani yoğun kullanan bir abone, yaklaşık yedi oturumdan sonra genel bir "come back tomorrow" mesajına takılacaktı. Masadaki seçenekler, sunucu sınırını 25 civarına çıkarmak ya da oturum sınırını 7'ye indirmekti.

**sections[1].blocks[19].html**
Böyle bakınca bu bir yapılandırma sorusuydu. Para açısından bakınca değildi. Oturum başına yaklaşık $0.034 ile [estimated], günde 10 oturum ayda yaklaşık $10.20 ediyor. Yıllık plan ayda net yaklaşık $3.54 bırakıyor. Bu hesap, Apple'ın Small Business Program'ındaki 15% komisyonu varsayıyor; programa başvurdum ama henüz kabul almadım. Başa baş noktası günde yaklaşık 3.5 oturum.

**sections[1].blocks[21].html**
İlk içgüdüm 3'tü. 5'te karar kıldım ve fiyatlara dokunmadım: ayda $5.99, yılda $49.99. Bir sınırı lansmandan sonra yükseltmek, düşürmekten daha kolay. Beş, her gün sonuna kadar kullanan yıllık bir abone için hâlâ başa baş noktasının üzerinde. Bahsim, neredeyse kimsenin bunu yapmayacağı ve kâr marjını en yüksek kullanımın değil ortalamanın belirleyeceği.

**sections[1].blocks[22].html**
Buradan bir kural çıktı: "unlimited" kelimesi Premium metinlerinde hiç geçmiyor. Sınır gerçek; öyle bir iddia yalan olurdu.

**sections[1].blocks[23].html**
<strong>Nasıl anlayacağım.</strong> Proxy artık her çağrının token sayısını kaydediyor. Gerçek bir oturum tahminden ucuza geliyorsa sınır yükselir.

**sections[1].blocks[24].text:** İlk Daily Test

**sections[1].blocks[25].first:** İlk testin yüklenmesi 20 saniyeden uzun sürüyor.
**sections[1].blocks[25].actual:** İlk test neden üretiliyor ki?

**sections[1].blocks[26].html**
Her yeni kullanıcı aynı ilk ekranla karşılaşıyor ve bu ekranın yüklenmesi 20 saniyeden uzun sürüyordu. Bu bir gecikme sorunu gibi görünüyor ve ilk çözümüm de onu öyle ele aldı: kullanıcı "Get started"a dokunduğu anda seti arka planda üretmeye başlamak. Yine de yeterince hızlı olmadı.

**sections[1].blocks[27].html**
Daha iyi soru, bu setin neden üretildiğiydi. Burası her kullanıcının gördüğü tek ekran; tuhaf bir sorunun ya da yanlış bir cevap anahtarının en pahalıya patladığı yer de burası. Onu üretmek, bir bekleme, bir API çağrısı ve kimsenin okumadığı bir cevap anahtarı demekti.

**sections[1].blocks[28].html**
Bunun yerine ilk testi elle yazdım: beş soru, anında açılıyor, API çağrısı yok. O sabah kurduğum arka plan ön yüklemesi de aynı gün kaldırıldı.

**sections[1].blocks[29].html**
Tasarruf göründüğünden küçük çıktı. Bir testi bitirmek, ertesi günün setini arka planda hazırlamayı başlatıyor; böylece ertesi gün test anında açılıyor. Bu da bir daha hiç geri dönmeyen her kurulumun yine de bir üretimin bedelini ödediği anlamına geliyor. Ölçülen token sayılarıyla bu yaklaşık $0.025 [measured].

**sections[1].blocks[30].html**
<strong>Nasıl anlayacağım.</strong> Sabit setteki tamamlanma oranı ve puanlar, üretilen setlerle karşılaştırılacak. Uygulama her testin hangi tür set olduğunu kaydediyor.

**sections[1].blocks[31].text:** Ürünün tutmadığı bir söz

**sections[1].blocks[32].first:** Yanlış bir cevapta açıklama görünmüyor. Eksik metin.
**sections[1].blocks[32].actual:** Mağaza sayfası, ürünün yapmadığı bir şeyi vaat ediyor.

**sections[1].blocks[34].html**
Başvuru günü, Daily Test'te yanlış bir cevabın yalnızca doğru cevabı gösterdiğini, başka hiçbir şey göstermediğini fark ettim. İlk yorumum bir metin parçasının eksik olduğuydu. Değildi. Daily Test cihazda puanlanıyor ve üretilen set yalnızca modelin önceden tahmin ettiği yanlış cevaplar için yorum taşıyordu. Doğru cevaplar, atlananlar ve beklenmedik her hata hiçbir açıklama almıyordu.

**sections[1].blocks[35].html**
Oysa App Store açıklaması, kullanıcının her cevabın neden doğru ya da yanlış olduğunu gördüğünü söylüyordu. Bu sayfanın ilk sürümü de öyle. Bu sözü, ürünle karşılaştırmadan iki kez yazmıştım.

**sections[1].blocks[36].html**
Çözüm, soru başına bir açıklamaydı: sorularla aynı çağrıda üretilen, 25 kelimenin altında bir açıklama. Bunun için daha fazla alan gerekiyordu, bu yüzden Daily Test'e kendi çıktı bütçesi verildi. En uzun yanıtın kullandığı pay, 2,048 token'lık sınırda 80% iken 3,072 token'lık sınırda 49% oldu [measured]. Ortalama açıklama yaklaşık 29 kelimeden 20'ye indi. 25 açıklamanın beşi hâlâ sınırı biraz aşıyordu; bunu kabul ettim, çünkü hiçbir şey tam uzunluğa bağlı değil.

**sections[1].blocks[38].html**
<strong>Maliyeti.</strong> Bir Daily Test seti artık yaklaşık $0.023–0.028 tutuyor [measured]; bu, daha önceki $0.021 tahminimin üzerinde. <strong>Nasıl anlayacağım.</strong> Yeni açıklamaları cihazda şimdiye kadar yalnızca elle yazılmış ilk testte gördüm. Bir sonraki kontrol, gerçek bir cihazda üretilen ilk set.

## Section 3

**sections[2].blocks[0].html**
Paywall'ın yerini belirlemek üç karar ve bir hata doğurdu.

**sections[2].blocks[1].html**
<strong>Sonuç listesinden sonra değil, başarı anından sonra.</strong> İlk test eskiden sonuç ekranındaki bir paywall kartıyla bitiyordu: ilk puanın hemen ardından, henüz gözle görülür hiçbir şey değişmeden önce. Onu taşıdım. Artık sonuç ekranı tek bir butonla bitiyor: "Start my climb". Kullanıcının avatarı Home ekranında ilk basamağını çıkıyor ve Premium ekranı yaklaşık 600 ms sonra, bir kez açılıyor. Hipotez şu: görünür bir başarının hemen sonrası, bir sonuç listesinin sonrasından daha iyi dönüşüm getirir. Bu bir hipotez, bulgu değil.

**sections[2].blocks[4].html**
<strong>Çıkış, çıkış olarak kalır.</strong> Günün pratik oturumunu kullanmış ücretsiz bir kullanıcı, tek çıkışı "Back to topics" olan bir sonuç ekranına düşüyordu. Akla gelen ilk hamle, bu butonun paywall'ı açmasını sağlamaktı. Bunu yapmadım: bir şey söyleyip başka bir şey yapan bir buton dark pattern'dir ve çıkmak isteyen biri bunun için bir satış konuşmasını aşmak zorunda kalmamalı. Bunun yerine ekrana, Premium'un neler kattığını gösteren ve kendi "See Premium" butonu olan bir teklif kartı eklendi. "Back to topics" ise altında, olduğu gibi duruyor.

**sections[2].blocks[5].html**
Daha küçük bir geri alma kararı da buraya ait. Premium karşılaştırma tablosuna, ücretsiz ile Premium arasındaki günlük oturum farkını gösteren bir satır ekledim. 375 pt genişliğindeki bir telefonda bu satır, plan kartlarını neredeyse ekranın dışına itti. Kartların görünen kısmı varsayılan yazı boyutunda 78 pt iken yaklaşık 30 pt kaldı, büyük yazı boyutunda ise tamamen kayboldu [measured]. Aynı gün geri aldım. İnsanların satın aldığı şeyi, alacakları şeyi anlatmak için gizlemek yanlış bir takas. Bunun bedeli gerçek bir boşluk: teklif kartı daha fazla günlük oturum vaat ediyor, ama Premium ekranı bunu henüz gösteremiyor.

**sections[2].blocks[6].html**
<strong>Hata: tek sürümde iki değişken.</strong> Yeni ilk gün paywall'ı, alışkanlık katmanı olan Monthly Climb ile aynı sürümde yayına çıktı. Kendi oyunlaştırma spesifikasyonum tam olarak buna karşı uyarmıştı: birlikte yayına çıkarlarsa etkileri birbirinden ayrılamaz. Karşılaştırma yapabileceğim önceki bir referans değer de yok. Bu yüzden lansmandan sonra ilk gün dönüşümünü okuduğumda onu raporlayabileceğim, ama ne kadarının zamanlamadan geldiğini söyleyemeyeceğim. Neyi öğrenmem gerektiğini tanımlamadan önce neyi geliştireceğimi tanımlamıştım.

## Section 4

**sections[3].blocks[0].html**
<strong>Ölçümü düzelttim, başka bir yerde bozdum.</strong> Bu sayfanın ilk sürümü, ölçümün en başta gelmesi gerektiğini söylüyordu. Bu sefer öyle oldu: yazılı bir plana dayanan analitik ve her API çağrısında token kaydı, hepsi başvurudan önce çalışıyordu. Sonra etkisini ölçmek istediğim iki değişikliği aynı sürümde yayına çıkardım. Ölçüm altyapısı şart, ama ölçülebilir bir planla aynı şey değil.

**sections[3].blocks[1].html**
<strong>Eskimiş belgeler tek bir yerde kalmıyor.</strong> Bu sayfanın ilk sürümü, kendi belgelerimdeki bir satırı anlatıyordu: ücretsiz katmanın neredeyse hiçbir maliyeti olmadığını iddia eden ve arkasındaki gerekçe çürütüldükten sonra da yerinde kalan bir satır. Aynı iddia, başvuru gününe kadar projenin README dosyasında da duruyordu. Başvurudan sonra yaptığım bir belge denetimi, belgelerin genelinde artık gerçeği yansıtmayan 21 durum satırı buldu. Benimsediğim çözüm yapısal: güncel durum tek bir belgede tutuluyor; eski planlar ise kimsenin sürdürmediği satır satır düzeltmeler yerine tarihli bir "historical" notu alıyor.

**sections[3].blocks[2].html**
<strong>Geri dönüşü olmayan kararları erken ver.</strong> Bundle identifier aylarca yer tutucu olarak kaldı ve lansmanı engelleyen bir sorun olarak karşıma çıktı. Ürün kimlikleri bir kez oluşturulduktan sonra yeniden adlandırılamıyor. Aynısı sonda da geçerliydi. Apple, bir sürüm yayınlandıktan sonra uygulamanın iPad desteğini kaldırmasına izin vermiyor. Bu yüzden iPad desteğini bilerek tuttum, çünkü eğitim uygulamaları okul tabletlerinde kullanılıyor; uygulamayı da dikey moda kilitledim. Bunun bedeli iPad'de Split View. Bunların hiçbiri zor değil. Hepsi geç fark edildiğinde can sıkıcı.

**sections[3].blocks[3].html**
<strong>Bir kararı geri almak, onu savunmaktan daha ucuz.</strong> Planladığım kapalı bir test turunu iptal ettim, çünkü yedi kişi temel döngüyü zaten kullanmıştı. Satın alma ekranından, duyurulmuş ama geliştirilmemiş iki özelliği çıkardım. Var olmayan şeyleri listeleyen ücretli bir ekran hem App Store'dan ret riski hem de bir yalan. Karşılaştırma tablosuna eklediğim satırı bir gün içinde geri aldım. Her geri dönüş, tarihiyle ve eski gerekçenin yerini alan yeni gerekçeyle birlikte proje günlüğünde yazılı.

**sections[3].blocks[4].html**
<strong>Nasıl çalıştım.</strong> Kodu yapay zekâ kodlama ajanları yazdı; benim işim kararlardı. Muhakeme gerektiren her değişiklik, ajanın hazırladığı salt okunur bir raporla başladı (seçenekler, ölçümler, riskler) ve ben karar verene kadar kod yazılmadı. Başvuru anında projede 883 uygulama testi ve 70 sunucu testi vardı. Karar kaydını tutmak, hiçbir şeyini değiştirmeden tekrar edeceğim kısım.

## Section 5

**sections[4].blocks[0].html**
GrammarLens 1.0, iki aboneliğiyle birlikte 24 Eylül 2026'da App Store incelemesine gönderildi. Henüz onaylanmadı. Yayın manuel olduğu için onay, uygulamayı kendiliğinden yayına çıkarmayacak.

**sections[4].blocks[1].html**
Yayından sonraki ilk dört hafta geliştirmeye değil, veriyi okumaya ayrıldı. Sorular:

**sections[4].blocks[2].items[0]:** Bir Daily Test ve bir pratik oturumu gerçekte ne kadara mal oluyor? Token kaydı, bu sayfadaki bütün tahminlerin yerini alacak.
**sections[4].blocks[2].items[1]:** Günlük pratik oturumunu kullanan ücretsiz kullanıcılar, kullanmayanlardan daha sık aboneye dönüşüyor mu?
**sections[4].blocks[2].items[2]:** Elle yazılmış ilk test, üretilen testlerden farklı bir performans gösteriyor mu?
**sections[4].blocks[2].items[3]:** Dönüşüm, paywall'ın göründüğü yere göre nasıl değişiyor? Bu soru, 3. bölümdeki çekinceyle birlikte okunmalı.

**sections[4].blocks[3].html**
Bir sonraki ürün kararı şimdiden çerçevelendi: her cihazın kendi Daily Test'ini üretmesi yerine, herkes için günde tek bir set üretmek. Bu, Daily Test maliyetinin büyük kısmını ortadan kaldırır. Hâlâ açık olan konular şunlar: cevapların nasıl açıklanacağı, farklı saat dilimlerinde günün hangi saatte başlayacağı ve günlük üretim başarısız olursa ne olacağı. Bu karar token verisini bekliyor.

**sections[4].blocks[4].html**
Sonuçlar geldiğinde bu sayfaya bir sonuçlar bölümü eklenecek.

## Figures (content keys)

### C2 timeline — figures.timeline

| EN key | TR |
|---|---|
| label | Proje zaman çizelgesi, 19 Temmuz – 24 Eylül 2026 |
| caption | İlk commit'ten başvuruya yaklaşık on hafta. |
| groups[0].title | Temmuz: MVP haftası |
| groups[0].events[0].date | 19 Tem |
| groups[0].events[0].label | İlk commit |
| groups[0].events[1].date | 20–25 Tem |
| groups[0].events[1].label | MVP haftası: ilk build, görüşmeler, 2. iterasyon |
| groups[1].title | Ağustos–Eylül: App Store'a doğru |
| groups[1].events[0].date | 24 Ağu |
| groups[1].events[0].label | Onboarding, Home ve Premium ekranı |
| groups[1].events[1].date | 2 Eyl |
| groups[1].events[1].label | Ücretsiz ve ücretli ayrımı |
| groups[1].events[2].date | 6 Eyl |
| groups[1].events[2].label | API anahtarı bir sunucu proxy'sinin arkasına taşındı |
| groups[1].events[3].date | 14 Eyl |
| groups[1].events[3].label | Gerçek bir iPhone'da ilk çalıştırma |
| groups[1].events[4].date | 15 Eyl |
| groups[1].events[4].label | Paywall açığı kapatıldı; ücretsiz katman tanımlandı |
| groups[1].events[5].date | 19 Eyl |
| groups[1].events[5].label | Monthly Climb ilk sürüme alındı |
| groups[1].events[6].date | 21–22 Eyl |
| groups[1].events[6].label | Sınır 10 → 5, yapay zekâ izni, sabit ilk test, tırmanıştan sonra paywall |
| groups[1].events[7].date | 23 Eyl |
| groups[1].events[7].label | Birleştirildi; ilk TestFlight build'i |
| groups[1].events[8].date | 24 Eyl |
| groups[1].events[8].label | App Store incelemesine gönderildi |

### C3 model calls — figures.modelCalls

| EN key | TR |
|---|---|
| label | Her akış dil modelini nerede çağırıyor |
| caption | Her model çağrısı, kullanıcı sayısıyla büyüyen bir maliyet. Ücretsiz modlar en fazla bir çağrı yapıyor, ücretli mod iki. |
| legend.model | Model çağrısı |
| legend.device | Cihazda |
| flows[0].name | İlk Daily Test |
| flows[0].steps[0].text | Elle yazılmış sorular |
| flows[0].steps[1].text | Cevaplar cihazda puanlanır |
| flows[1].name | Daily Test |
| flows[1].steps[0].text | Model soruları ve açıklamaları üretir |
| flows[1].steps[1].text | Cevaplar cihazda puanlanır |
| flows[1].note | Bir testi bitirmek, ertesi günün setini arka planda hazırlar. |
| flows[2].name | Topic Practice |
| flows[2].steps[0].text | Model soruları üretir |
| flows[2].steps[1].text | Kullanıcı cevaplar |
| flows[2].steps[2].text | Model puanlar ve açıklar |

### C4 free-user cost — figures.freeCost

| EN key | TR |
|---|---|
| label | Uygulamayı her gün açan ücretsiz bir kullanıcının aylık maliyeti |
| caption | Günlük ücretsiz pratik oturumu, aktif bir ücretsiz kullanıcının maliyetini iki katından fazlasına çıkarıyor. |
| legend.measured | ölçüldü |
| legend.estimated | tahmin |
| bars[0].label | Yalnızca Daily Test |
| bars[0].provenance | Ölçülen token sayıları × liste fiyatı |
| bars[1].label | Daily Test + günde bir ücretsiz pratik oturumu |
| bars[1].provenance | Daily Test kısmı ölçüldü, pratik kısmı tahmin |

### C5 cap math — figures.capMath

| EN key | TR |
|---|---|
| label | Günlük pratik oturumu sayısına göre aylık model maliyeti |
| caption | Oturum başına yaklaşık $0.034 ile (tahmin), eski sınırda yoğun kullanan bir abone, yıllık planın getirdiğinin kabaca üç katına mal olabiliyordu. |
| plans[0].label[0] | Yıllık plan, net |
| plans[0].label[1] | aylık: $3.54 |
| plans[1].label[0] | Aylık plan, net: $5.09 |
| caps[0].label | Yeni sınır: 5 |
| caps[1].label | Eski sınır: 10 |
| text.yAxis | Aylık model maliyeti (USD) |
| text.xAxis | Günlük pratik oturumu |
| text.line | Oturum başına $0.034 ile maliyet |
| text.estimated | tahmin |
| text.breakEven[0] | Başa baş: yaklaşık |
| text.breakEven[1] | günde 3.5 oturum |

### C7 storyboard — figures.storyboard

| EN key | TR |
|---|---|
| label | İlk gün, sırasıyla |
| frames[0].alt | Boşluk doldurma sorusu gösteren ilk Daily Test. |
| frames[0].caption | Elle yazılmış ilk test, yükleme yok. |
| frames[1].alt | Altında Start my climb butonu olan ilk test sonuçları. |
| frames[1].caption | Tek buton: Start my climb. |
| frames[2].alt | Avatarın dağ patikasının ilk basamağında durduğu Home ekranı. |
| frames[2].caption | Avatar ilk adımını atıyor. |
| frames[3].alt | Aylık ve yıllık planları gösteren Premium ekranı. |
| frames[3].caption | Premium ekranı. İlk gün, tırmanışın hemen ardından bir kez açılıyor. |

### C8 / C9 screenshots — figures.offerCard, figures.explanation

| EN key | TR |
|---|---|
| offerCard.alt | Premium teklif kartı ve altında Back to topics butonu olan pratik sonuç ekranı. |
| offerCard.caption | Teklif kartı Premium'un neler kattığını gösteriyor. Back to topics yerinde duruyor. |
| explanation.alt | Yanlış bir cevabı, doğru cevabı ve tek cümlelik bir açıklamayı gösteren Daily Test sonuç kartı. |
| explanation.caption | Artık her cevabın bir gerekçesi var. |

### C6 token budget — figures.tokenBudget

| EN key | TR |
|---|---|
| label | Daily Test çıktı token sınırı ve ölçülen en uzun yanıt |
| caption | Her biri için beş test çalıştırması, yerel sunucuda ölçüldü. |
| rows[0].label | Açıklamalardan önce |
| rows[1].label | Açıklamalarla, kendi sınırıyla |

## Strings currently hard-coded in components (Section B of the inventory)

These must move out of the components into per-language strings. EN values stay exactly as they are now.

| Component | EN | TR |
|---|---|---|
| ChartFigure | Show chart data | Grafik verisini göster |
| Reframe | First framing | İlk bakış |
| Reframe | Actual problem | Asıl problem |
| Timeline | Date (2026) | Tarih (2026) |
| Timeline | Event | Olay |
| ModelCalls | 1 model call / {n} model calls | 1 model çağrısı / {n} model çağrısı |
| ModelCalls | " (model)" | " (model)" |
| ModelCalls | ", then " | ", ardından " |
| ModelCalls | Flow / Steps / Model calls | Akış / Adımlar / Model çağrısı |
| FreeCostBars | Free user, 30 days / Cost per month / Provenance | Ücretsiz kullanıcı, 30 gün / Aylık maliyet / Veri kaynağı |
| CapChart | Sessions per day / Model cost per month (estimated) / Note | Günlük oturum / Aylık model maliyeti (tahmin) / Not |
| CapChart | about {n} | yaklaşık {n} |
| TokenBudget | {worst} of {limit} tokens, {n}% headroom | {worst} / {limit} token, {n}% boş pay |
| TokenBudget | Version / Limit / Worst response / Headroom | Sürüm / Sınır / En uzun yanıt / Boş pay |
| provenance tag labels | measured / estimated | ölçüldü / tahmin |

ModelCalls table rows: when joining steps after the first, lowercase only the first character using Turkish rules on TR (`toLocaleLowerCase('tr')`, so "I" becomes "ı"). Expected TR row: "Elle yazılmış sorular, ardından cevaplar cihazda puanlanır".
