# GrammarLens — case study (Türkçe metin)

İngilizce sayfanın karşılığı. Aynı üç bölüm, aynı rakamlar.

---

## Giriş

GrammarLens, iOS için bir İngilizce dilbilgisi pratik uygulaması. Alıştırmaları
anlık üretiyor, yazdığını puanlıyor ve hatayı bir kural adı söyleyerek değil,
sade bir dille açıklıyor.

Tek başıma, yedi haftada geliştirdim. Bir hafta planlamıştım. Aşağıdakiler bir
özellik turu değil — ürünü değiştiren üç karar ve her birini öğrenmenin bana
neye mal olduğu.

---

## 1. Araştırmanın çürüttüğü varsayım

Kullanıcı olarak başladım. IELTS hazırlığı sırasında aynı birkaç hatayı sürekli
tekrarlıyordum — gerund ile infinitive ayrımı, modal'lar, modal'ların geçmiş
biçimleri — ve doğru cümleyi hissederek kurabiliyor ama neden doğru olduğunu
açıklayamıyordum. Daldırma yoluyla gelen akıcılık, örtük kalmış dilbilgisi
bilgisi. IELTS ise açık olanını istiyor.

Bu bana bir problem tanımı verdi. Bir ürün vermedi. İlk sürümüm, farkında
olmadan kurduğum bir varsayımı içine almıştı: dilbilgisi kuralının adını
söylemek bir özelliktir. Uygulama kural adlarını birincil etiket olarak
gösteriyordu.

Yedi kişi buna katılmadı. Dört görüşme ve üç kullanılabilirlik testi boyunca
desen tutarlıydı. Bir katılımcı, kendisine "Past Perfect Continuous kullan"
demenin hiçbir şey ifade etmediğini söyledi — o yapıyı her gün kullanmasına
rağmen. Bir diğeri "noun clause" gibi terimlerin, tarif ettikleri hatanın
kendisinden daha zor olduğunu belirtti.

Ben de tersine çevirdim. Önce sade dille açıklama, kural adı isteyene ikincil
bir alt bilgi olarak geride. Sonrasındaki üç kullanılabilirlik testinin üçünde
de katılımcılar sade dildeki geri bildirimi, hiç sorulmadan övdü. Projenin en
güçlü ve en çok tekrarlanan bulgusu bu oldu.

Aynı turlar ikinci bir varsayımı da öldürdü. Soru karışımım ağırlıklı olarak
boşluk doldurma ve çoktan seçmeliydi — yapması ve puanlaması en kolay
formatlar. Yedi kişiden beşi bunları reddetti. Neden olduğunu benim kendi
gerekçemden daha iyi anlatan tek bir cümle var: seçenek olsaydı tahmin
edeceğini, olmayınca gerçekten bildiğini kanıtlamak zorunda kaldığını söyledi.

Serbest metin cevapları puanlamak daha pahalı ve doğru yapması daha zor. Yine de
onlarda kaldım, çünkü kanıt ucuz formatın yanlış şeyi ölçtüğünü söylüyordu.

---

## 2. Maliyetin verdiği kararlar

GrammarLens ürettiği her alıştırma ve puanladığı her cevap için bir dil modeline
istek atıyor. Bu, maliyeti bir mühendislik ayrıntısı değil, bir ürün kısıtı
haline getiriyor ve birkaç kararı doğrudan değiştirdi.

Birim ekonomi — tahminden değil, yayındaki servisten türetildi:

- Bir konu pratiği seansı (üretim ve puanlama birlikte) yaklaşık $0,034
- Bir günlük test üretimi yaklaşık $0,021
- Tipik bir premium kullanıcı ayda yaklaşık $1,43 maliyet, buna karşılık $5,09
  net gelir — kabaca %72 marj
- Uygulamayı her gün açan ücretsiz bir kullanıcı ayda yaklaşık $0,63 maliyet ve
  sıfır gelir

Asıl önemli satır sonuncusu. Maliyeti kullanıcı sayısıyla büyüyen, geliri
kimseyle büyümeyen bir ücretsiz katman bir büyüme stratejisi değil, bir kaçaktır.
Bu yüzden ücretsiz katmanı, ücretli olanın kısıtlanmış hali olarak değil,
yapısal olarak farklı bir mekanik olarak tasarladım: günlük test tek bir üretim
çağrısı kullanıyor ve model tabanlı puanlama hiç yok; her yanlış cevabın
açıklaması da ikinci bir çağrıda değil, aynı çağrının içinde üretiliyor.

Maliyet aynı zamanda tavanı belirledi. Proxy hem cihaz başına hem global günlük
bir sınır uyguluyor ve sınır, asıl çağrıdan **önce** rezerve ediliyor — yani
denemeyi sayıyor, başarıyı değil. Harcamayı gerçekten sınırlayan tek sürüm bu.
Cihaz başına sınır 30 iken tek bir kurulum günde yaklaşık 14 seans çalıştırıp
ayda yaklaşık $30 maliyet üretebiliyordu; karşılığında $5,09 gelir. Sınırı 15'e
indirdim; bu hâlâ gerçek hiçbir kullanım deseninin iki katı ve en kötü durumu
$8 ile $15 arasında tutuyor. Global sınır olan 300 ise, yükseltmeye karar
edene kadar toplam harcamayı ayda yaklaşık $300 ile bağlıyor.

Dürüst uyarı dipnota değil, tam buraya ait: bu rakamlar modellendi, ölçülmedi.
Sistem promptlarının boyutları gerçek, yayındaki koddan okundu. Gerisi tahmin.
Anthropic her yanıtta tam token sayılarını döndürüyor ve proxy'm bunları şu an
atıyor. O iki sayıyı kaydetmek bu bölümün tamamını veriyle değiştirir ve bunu
henüz yapmadım.

---

## 3. Baştan yapsam farklı yapacaklarım

**Ölçüm en başta kurulmalıydı.** Bu projedeki ölçülmemiş her bahis aynı eksik
katmana çıkıyor. Enstrümantasyonu erteledim çünkü launch öncesinde gereksiz bir
yük gibi göründü; sonucu, bu case study'nin bir bölümünün "tahmin" diyerek
açılmak zorunda kalması oldu.

**Maliyet tahminleri yayındaki gerçeğe karşı daha erken kontrol edilmeliydi.**
Fiyatlandırma hesaplarımdan biri haftalarca yanlış bir model fiyatı üzerinden
çalıştı; "ücretsiz katmanın maliyeti neredeyse sıfır" satırı ise, arkasındaki
mantık aynı dokümanın başka bir yerinde çürütüldükten sonra bile yerinde kaldı.

**Geri alınamaz kimlik kararları ilk gün verilmeliydi.** Paket tanımlayıcısı
aylarca Flutter'ın `com.example` yer tutucusu olarak durdu ve bir launch
engelleyicisi olarak ortaya çıktı. Ürün tanımlayıcılarının ve yetki adlarının
App Store Connect ile birebir eşleşmesi gerekiyor ve bir kez oluşturulduktan
sonra yeniden adlandırılamıyor — hiçbiri zor değil, hepsini geç fark etmek can
sıkıcı.

**Bir kararı geri almak, onu savunmaktan ucuz.** Planladığım özel test turunu
iptal ettim, çünkü yedi kişi çekirdek döngüyü zaten kullanmıştı ve ikinci küçük
bir tur yalnızca bildiğimi tekrarlayacaktı. Launch sıralamasını tersine çevirdim
ki doğrulanmış olan tek şey, doğrulanmamış bahislerden önce yayına çıksın. Satın
alma ekranından, reklamı yapılan ama yapılmamış iki özelliği kaldırdım; çünkü
var olmayan şeyleri listeleyen bir ödeme ekranı hem App Store ret riski hem de
yalan.

Bunların her biri proje kaydında bilinçli bir geri dönüş olarak, tarihiyle ve
eskisinin yerine geçen gerekçesiyle yazılı. O kaydı tutmak, hiçbir şeyini
değiştirmeden tekrar edeceğim kısım.
