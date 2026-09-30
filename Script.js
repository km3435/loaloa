(function(){
  var acTypeIcons = {
    "سبليت": "❄️",
    "دولابي": "🪟",
    "كاسيت": "🔲",
    "باكدج": "📦",
    "مركزي": "🏢",
    "داكت": "🌬️"
  };

  var servicesData = {
    split: {
      icon: "❄️",
      title: "مكيفات سبليت",
      sub: "بيع وتركيب واستشارة",
      images: ["PHOTO/a11.jpg", "PHOTO/a16.jpg", "PHOTO/a12.jpg", "PHOTO/a15.jpg"],
      types: ["سبليت", "دولابي", "كاسيت", "باكدج"],
      desc: "بنوفر كل ماركات المكيفات السبليت العالمية بأسعار مباشرة من غير وسيط، مع استشارة صادقة قبل الشراء تساعدك تختار المقاس والقدرة المناسبة لمساحتك.",
      items: [
        "بيع جميع الماركات العالمية والمحلية بأسعار تنافسية",
        "استشارة مجانية لاختيار القدرة المناسبة (بالطن) لمساحتك",
        "تركيب فوري بعد الشراء مع نفس الفريق الفني",
        "توفير قطع الغيار والإكسسوارات الأصلية لكل موديل"
      ]
    },
    cleaning: {
      icon: "🧹",
      title: "تنظيف المكيفات",
      sub: "غسيل وتعقيم احترافي",
      images: ["PHOTO/تنظيف.jpg", "PHOTO/ترتيب الاسلاك2.jpg", "PHOTO/a16.jpg", "PHOTO/تمظيف2.webp"],
      types: ["سبليت", "دولابي", "كاسيت", "داكت"],
      desc: "تنظيف شامل للوحدة الداخلية والخارجية بالبخار وأدوات متخصصة، عشان تكييفك يرجع يبرد زي الأول ويقل استهلاك الكهرباء.",
      items: [
        "غسيل بالبخار للوحدة الداخلية والخارجية",
        "تعقيم وتغيير الفلاتر عند الحاجة",
        "فحص ضغط الغاز أثناء التنظيف بدون تكلفة إضافية",
        "تلميع وتنظيف خارجي يحافظ على شكل الوحدة"
      ]
    },
    parts: {
      icon: "⚙️",
      title: "قطع غيار أصلية",
      sub: "ضمان معتمد على كل قطعة",
      images: ["PHOTO/قطع4.jpg", "PHOTO/قطع3.webp", "PHOTO/قطع2.jpg", "PHOTO/قطع1.webp"],
      types: ["سبليت", "دولابي", "كاسيت", "باكدج"],
      desc: "بنتعامل بقطع غيار أصلية 100% معتمدة من الوكلاء، عشان تكييفك ياخد عمر أطول ومايتعطلش تاني بنفس العطل بعد شهرين.",
      items: [
        "كمبروسرات ولوحات تحكم أصلية لكل الماركات",
        "فلاتر وريموت كنترول أصلي أو بديل معتمد",
        "غاز فريون أصلي مطابق للمواصفة",
        "فاتورة وضمان مكتوب على كل قطعة غيار"
      ]
    },
    vrf: {
      icon: "🏢",
      title: "تأسيس المشاريع (VRF/VRV)",
      sub: "تصميم وتنفيذ متكامل",
      images: ["PHOTO/a7.jpg", "PHOTO/a8.jpg", "PHOTO/a14.jpg", "PHOTO/a3.jpg"],
      types: ["مركزي", "كاسيت", "داكت"],
      desc: "من التصميم للتشغيل، بنتولى مشاريع التكييف المركزي للمباني السكنية والتجارية بفريق مهندسين متخصص وخطوات واضحة من الأول.",
      items: [
        "دراسة المبنى وتصميم شبكة التكييف المناسبة",
        "تمديد المواسير والتوصيلات الكهربائية باحتراف",
        "تركيب الوحدات الداخلية والخارجية ووحدة التحكم",
        "تشغيل وتجربة النظام بالكامل قبل التسليم"
      ]
    },
    install: {
      icon: "🔧",
      title: "تركيب المكيفات",
      sub: "تركيب دقيق بمعايير عالية",
      images: ["PHOTO/a4.jpg", "PHOTO/a2.jpg", "PHOTO/a12.jpg", "PHOTO/a15.jpg"],
      types: ["سبليت", "شباك", "كاسيت", "باكدج"],
      desc: "فريقنا الفني بيركب كل أنواع المكيفات (سبليت - شباك - مركزي) بأدوات حديثة، مع اختبار كامل للتبريد قبل ما نسلمك الشغل.",
      items: [
        "تركيب مكيفات سبليت أو شباك أو مركزي",
        "تمديد الكهرباء ومواسير التصريف بشكل مرتب",
        "اختبار التبريد وضغط الغاز بعد التركيب",
        "تسليم الشغل مع ضمان مكتوب على التركيب"
      ]
    },
    maintenance: {
      icon: "🛠️",
      title: "صيانة المكيفات",
      sub: "كشف أعطال وصيانة دورية",
      images: ["PHOTO/ترتيب الاسلاك1.jpg", "PHOTO/a10.jpg", "PHOTO/a13.jpg", "PHOTO/ترتيب الاسلاك2.jpg"],
      types: ["سبليت", "دولابي", "كاسيت", "باكدج"],
      desc: "بنكشف على العطل بصدق من غير مبالغة، ونصلح المشكلة الحقيقية بس، مع اقتراح خطة صيانة دورية تحميك من الأعطال المفاجئة.",
      items: [
        "كشف أعطال شامل بالأجهزة قبل أي تصليح",
        "تعبئة غاز وإصلاح تسريبات باحتراف",
        "إصلاح الأعطال الكهربائية والكروت الإلكترونية",
        "خطط صيانة دورية شهرية أو موسمية حسب احتياجك"
      ]
    },
    washer: {
      icon: "🧺",
      title: "صيانة الغسالات",
      sub: "أوتوماتيك وعادي",
      images: ["PHOTO/غسال1.jpg", "PHOTO/غسال2.jpg", "PHOTO/غسال3.jpg", "PHOTO/غسال4.jpg"],
      desc: "صيانة كل أنواع الغسالات الأوتوماتيك والعادية، من الفحص الأولي لحد تغيير القطع التالفة بقطع مضمونة.",
      items: [
        "فحص شامل لأعطال الغسالة قبل أي تصليح",
        "تغيير السير والموتور عند الحاجة",
        "إصلاح مشاكل الطبلة والتسريب",
        "ضبط الكهرباء والبرمجة للموديلات الحديثة"
      ]
    },
    fridge: {
      icon: "🧊",
      title: "صيانة الثلاجات",
      sub: "كشف أعطال وصيانة احترافية",
      images: ["PHOTO/ثلاج1.jpg", "PHOTO/ثلاج2.webp", "PHOTO/ثلاج3.avif", "PHOTO/ثلاج4.webp"],
      desc: "بنصلح كل أنواع الثلاجات بمختلف الماركات، بفحص دقيق للعطل الحقيقي وقطع غيار مضمونة، عشان الثلاجة ترجع تبرد وتوفر في استهلاك الكهرباء.",
      items: [
        "كشف أعطال شامل قبل أي تصليح",
        "إصلاح مشاكل التبريد والفريزر",
        "تغيير الكمبروسر والثرموستات عند الحاجة",
        "شحن الفريون وإصلاح تسريبات الغاز"
      ]
    }
  };

  var overlay = document.getElementById('svcModalOverlay');
  var modalMainImg = document.getElementById('svcModalMainImg');
  var modalThumbs = document.getElementById('svcModalThumbs');
  var modalTypes = document.getElementById('svcModalTypes');
  var modalIcon = document.getElementById('svcModalIcon');
  var modalTitle = document.getElementById('svcModalTitle');
  var modalSub = document.getElementById('svcModalSub');
  var modalDesc = document.getElementById('svcModalDesc');
  var modalList = document.getElementById('svcModalList');

  function openModal(key){
    var d = servicesData[key];
    if(!d) return;
    var images = d.images && d.images.length ? d.images : [d.img];
    modalMainImg.src = images[0];
    modalMainImg.alt = d.title;
    modalThumbs.innerHTML = '';
    images.slice(0, 4).forEach(function(src, idx){
      var thumb = document.createElement('div');
      thumb.className = 'svc-modal-thumb' + (idx === 0 ? ' active' : '');
      thumb.innerHTML = '<img src="' + src + '" alt="' + d.title + ' ' + (idx + 1) + '">';
      thumb.addEventListener('click', function(){
        modalMainImg.src = src;
        modalThumbs.querySelectorAll('.svc-modal-thumb').forEach(function(t){ t.classList.remove('active'); });
        thumb.classList.add('active');
      });
      modalThumbs.appendChild(thumb);
    });

    modalTypes.innerHTML = '';
    if (d.types && d.types.length) {
      modalTypes.classList.add('has-types');
      var typesTitle = document.createElement('div');
      typesTitle.className = 'svc-modal-types-title';
      typesTitle.innerHTML = '❄️ الأنواع اللي بنشتغل عليها';
      modalTypes.appendChild(typesTitle);
      d.types.forEach(function(typeName){
        var chip = document.createElement('div');
        chip.className = 'svc-type-chip';
        var ic = acTypeIcons[typeName] || '❄️';
        chip.innerHTML = '<span class="tico">' + ic + '</span><span class="tname">' + typeName + '</span>';
        modalTypes.appendChild(chip);
      });
    } else {
      modalTypes.classList.remove('has-types');
    }

    modalIcon.textContent = d.icon;
    modalTitle.textContent = d.title;
    modalSub.textContent = d.sub;
    modalDesc.textContent = d.desc;
    modalList.innerHTML = '';
    d.items.forEach(function(txt){
      var li = document.createElement('li');
      li.innerHTML = '<span class="chk">✓</span><span>' + txt + '</span>';
      modalList.appendChild(li);
    });
    overlay.classList.add('open');
  }

  document.querySelectorAll('.svc-card').forEach(function(card){
    card.addEventListener('click', function(){
      openModal(card.getAttribute('data-svc'));
    });
  });

  document.getElementById('svcModalClose').addEventListener('click', function(){
    overlay.classList.remove('open');
  });
  overlay.addEventListener('click', function(e){
    if(e.target === overlay) overlay.classList.remove('open');
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') overlay.classList.remove('open');
  });

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        navToggle.classList.remove('active');
        mainNav.classList.remove('open');
      });
    });
  }
  var commentForm = document.getElementById('commentForm');
  var commentSuccess = document.getElementById('commentSuccess');
  if(commentForm && commentSuccess){
    commentForm.addEventListener('submit', function(e){
      e.preventDefault();
      commentForm.reset();
      commentSuccess.classList.add('show');
      setTimeout(function(){
        commentSuccess.classList.remove('show');
      }, 4000);
    });
  }

  var voiceBar = document.getElementById('voiceBar');
  var voiceBarBtn = document.getElementById('voiceBarPlayBtn');
  var voiceBarAudio = document.getElementById('voiceBarAudio');
  if (voiceBar && voiceBarBtn && voiceBarAudio) {
    voiceBarBtn.addEventListener('click', function(){
      if (voiceBarAudio.paused) {
        voiceBarAudio.play().catch(function(){
          alert('لازم ترفع ملف الصوت في مجلد PHOTO باسم "شرح-خدماتنا.mp3" الأول عشان يشتغل التشغيل.');
        });
      } else {
        voiceBarAudio.pause();
      }
    });
    voiceBarAudio.addEventListener('play', function(){
      voiceBar.classList.add('playing');
      voiceBarBtn.textContent = '⏸️';
    });
    voiceBarAudio.addEventListener('pause', function(){
      voiceBar.classList.remove('playing');
      voiceBarBtn.textContent = '▶️';
    });
    voiceBarAudio.addEventListener('ended', function(){
      voiceBar.classList.remove('playing');
      voiceBarBtn.textContent = '▶️';
    });
  }
})();
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18474398448"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18474398448');
</script>
