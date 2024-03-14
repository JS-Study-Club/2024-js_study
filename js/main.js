 // 13기-> 12기 img change
 function ChangeImg1() {
    var yun = (document.getElementById("yun").src =
      "../images/js_img/main/person/윤서.png");
    var yang = (document.getElementById("yang").src =
      "../images/js_img/main/person/혜원.png");
    var park = (document.getElementById("park").src =
      "../images/js_img/main/person/민지.png");
    var im = (document.getElementById("im").src =
      "../images/js_img/main/person/채영.png");
    var shin = (document.getElementById("shin").src =
      "../images/js_img/main/person/유림.png");
    var su = (document.getElementById("su").src =
      "../images/js_img/main/person/수연.png");
  }
  // 13기 -> 12기 text change
  function ChangeText1() {
    const yunT = document.getElementById("yunT");
    yunT.innerText = "김윤서";
    const yangT = document.getElementById("yangT");
    yangT.innerText = "양혜원";
    const parkT = document.getElementById("parkT");
    parkT.innerText = "박민지";
    const imT = document.getElementById("imT");
    imT.innerText = "임채영";
    const shinT = document.getElementById("shinT");
    shinT.innerText = "신유림";
    const suT = document.getElementById("suT");
    suT.innerText = "김수연";

    const yunTe = document.getElementById("yunTe");
    yunTe.innerText =
      "뉴미디어소프트웨어과\nJava, C, C++, HTML, CSS, JavaScript, PHP, MySQL\nJS study 12기 동아리 회장 입니다!";
    const yangTe = document.getElementById("yangTe");
    yangTe.innerText =
      "뉴미디어웹솔루션과\nJava, C, Python, HTML, CSS, JavaScript\nJS study 파이팅 ~";
    const parkTe = document.getElementById("parkTe");
    parkTe.innerText =
      "뉴미디어디자인과\nIllustrator, Photoshop\n최고의 동아리 JS study❤";
    const imTe = document.getElementById("imTe");
    imTe.innerText =
      "뉴미디어소프트웨어과\nJava, C, C++, HTML, CSS, Python, MySQL, Kotlin\nJS study 2023년에도 열심히 합시다!🤩";
    const shinTe = document.getElementById("shinTe");
    shinTe.innerText =
      "뉴미디어웹솔루션과\nJava, C, HTML, CSS, Python, JavaScript, PHP\n모두모두 열심히, 좋은 결과 있기를!";
    const suTe = document.getElementById("suTe");
    suTe.innerText =
      "뉴미디어디자인과\nai, ps, id, ae, sketch\n디자인을 합시다~";
  }

  // 12기 -> 13기 img change
  function ChangeImg() {
    var yun = (document.getElementById("yun").src =
      "../images/js_img/main/person/한별.png");
    var yang = (document.getElementById("yang").src =
      "../images/js_img/main/person/하은.png");
    var park = (document.getElementById("park").src =
      "../images/js_img/main/person/유정.png");
    var im = (document.getElementById("im").src =
      "../images/js_img/main/person/지안.png");
    var shin = (document.getElementById("shin").src =
      "../images/js_img/main/person/설화.png");
    var su = (document.getElementById("su").src =
      "../images/js_img/main/person/서영.png");
  }
  // 12기 -> 13기 text change
  function ChangeText() {
    const yunT = document.getElementById("yunT");
    yunT.innerText = "임한별";
    const yangT = document.getElementById("yangT");
    yangT.innerText = "김하은";
    const parkT = document.getElementById("parkT");
    parkT.innerText = "황유정";
    const imT = document.getElementById("imT");
    imT.innerText = "장지안";
    const shinT = document.getElementById("shinT");
    shinT.innerText = "이설화";
    const suT = document.getElementById("suT");
    suT.innerText = "황서영";

    const yunTe = document.getElementById("yunTe");
    yunTe.innerText =
      "뉴미디어소프트웨어과\nJava, C, HTML, CSS, JavaScript\nJS study 파이팅~!";
    const yangTe = document.getElementById("yangTe");
    yangTe.innerText =
      "뉴미디어웹솔루션과\nJava, C, HTML, CSS, JavaScript, Python\n즐거운 JS study!";
    const parkTe = document.getElementById("parkTe");
    parkTe.innerText =
      "뉴미디어디자인과\nIllustraitor, Photoshop, AfterEffect\nJS study 동아리 최고!";
    const imTe = document.getElementById("imTe");
    imTe.innerText =
      "뉴미디어소프트웨어과\nJava, C, HTML, CSS, Python, JavaScript\nJS study 짱~~!";
    const shinTe = document.getElementById("shinTe");
    shinTe.innerText =
      "뉴미디어웹솔루션과\nJava, HTML, CSS, JavaScript\n기대되는 올해 JS study!";
    const suTe = document.getElementById("suTe");
    suTe.innerText =
      "뉴미디어디자인과\nAdobe Photoshop, Illustrator, After Effect, Figma\nJS study 모두 올해도 파이팅!!";
  }
 
  function btnChange(num){
      var button12 = document.querySelector(".btn12");
      var button13 = document.querySelector (".btn13");
      var button14 = document.querySelector (".btn14");
      if(num==1){ //12기 버튼이 눌렸을 때
            button12.style.backgroundColor = "#016BFF";
            button12.style.color = "white";
            // button12.style.borderColor = "#016BFF";

            button13.style.backgroundColor ="white";
            button13.style.color ="#016BFF"; 
            // button13.style.borderColor = "#016BFF"; 
      }
      else{//13기 버튼이 눌렸을 때
            button13.style.backgroundColor = "#016BFF";
            button13.style.color = "white";
            // button1.style.borderColor = "#016BFF";
            button12.style.backgroundColor ="white";
            button12.style.color ="#016BFF"; 
            // button2.style.borderColor = "#016BFF"; 
      }
  }