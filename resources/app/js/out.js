function gernireOutput()
{
  if (zeigeranzBS)
  {
    var zeigeranzBS_var = 0;
  }else
  {
    var zeigeranzBS_var = 15;
  }


  var markanzeigen_var = "";
  if(markanzeigen)
  {
    markanzeigen_var ='.zwischenstriche {'+'width: 100%;'+'height: 100%;'+'background: none;'+'position: absolute;'+'}';
  }

  if (markBSanzeigen)
  {
    var markBSanzeigen_var = 0;
  }
  else
  {
    var markBSanzeigen_var = 15;
  }

  if (schattentext)
  {
    var schattentext_var = 0;
  }
  else
  {
    var schattentext_var = 15;
  }


  var markanzeigen_var = "";
  if (markanzeigen)
  {
    markanzeigen_var ='<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<divclass="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>';
  }

  var zeigeranz_var = "";
  var harkig_var = "";
  var sekunden_var = "";

  if (sextra)
  {
    harkig_var = "harkig";
  }

  if(!document.getElementById("sekunden_anzeigen").classList.contains("hide"))
  {
    sekunden_var = '<div  id="s" class="zeigerfeld'+harkig_var+'</div>"><div class="zeiger" id="s_zeiger"></div></div>';
  }

  if (zeigeranz)
  {
    zeigeranz_var = '<div id="analog">'+'<div  id="h" class="zeigerfeld"><div class="zeiger" id="h_zeiger" ></div></div>'+'<div  id="m" class="zeigerfeld"><div class="zeiger" id="m_zeiger"></div></div>'+sekunden_var+'<div id="kreis"></div>'+'</div>';
  }


  var textangezeigt_var = "";
  if (textangezeigt)
  {
    textangezeigt_var = '#zeit {'+
      'position: absolute;'+
      'top: '+document.getElementById("hohe_zahlen").value+'px;'+
      'width: 100%;'+
      'font-size: '+document.getElementById("grosse_zahlen").value+'px;'+
      'text-align: center;'+
      'text-shadow: 0 0 '+schattentext_var+' '+document.getElementById("color_textschatten").value+';'+
      'color: '+document.getElementById("color_zahlen").value+';'+
      '</div>'+
    '}';
  }

  var out = '<!DOCTYPE html><html lang="de" dir="ltr"><head><meta charset="utf-8"><title>Uhr</title><style>'+
      'html, body {'+
        'width: 100%;'+
        'height: 100%;'+
        'margin: 0;'+
        'padding: 0;'+
        'transition: all 0.3s;'+
        'transition-timing-function: linear;'+
        'overflow: hidden;'+
        'background : '+document.getElementById("color_hintergrund").value+';'+
      '}'+
      '#Uhr {'+
        'position: relative;'+
        'top: '+document.getElementById("abstand_oben").value+'px;'+
        'margin-left: auto;'+
        'margin-right: auto;'+
        'width: '+document.getElementById("size").value+'px;'+
        'height: '+document.getElementById("size").value+'px;'+
        'box-shadow: 0 0 50px '+document.getElementById("color_schatten").value+';'+
        'border: 1px solid '+document.getElementById("color_schatten").value+';'+
        'border-radius: '+document.getElementById("rundung").value+'px;'+
        'color : '+document.getElementById("color_zeiger").value+';'+
        'background: none;'+
        'transition: all 1s;'+
        'transition-timing-function: ease-in-out;'+
      '}'+

  '<div class="Generator_zeiger">'+
      '#Uhr #kreis{'+
        'position: absolute;'+
        'top: 50%;'+
        'left: 50%;'+
        'width: 20px;'+
        'height: 20px;'+
        'margin-left: -10px;'+
        'margin-top: -10px;'+
        'background: '+document.getElementById("color_zeiger").value+';'+
        'border: 1px solid black;'+
        'border-radius: 100%;'+
      '}'+

      '#Uhr .zeiger {'+
        'position: absolute;'+
        'top: 50%;'+
        'left: 50%;'+
        'width: 10px;'+
        'height: 10px;'+
        'margin-left: -5px;'+
        'margin-top: -5px;'+
        'background: '+document.getElementById("color_zeiger2").value+';'+
        'box-shadow: 0 0 '+  zeigeranzBS_var+'px '+document.getElementById("color_zeigerBS").value+';'+
      '}'+


      '#Uhr #h_zeiger{'+
        'border-top: '+document.getElementById("grosse_zeiger").value/2+'px solid '+document.getElementById("color_zeiger").value+';'+
      '}'+

      '#Uhr #m_zeiger{'+
        'border-top: '+document.getElementById("grosse_zeiger").value/1.5+'px solid '+document.getElementById("color_zeiger").value+';'+
      '}'+

      '#Uhr #s_zeiger{'+
        'border-top: '+document.getElementById("grosse_zeiger").value+'px solid '+document.getElementById("color_zeiger").value+';'+
      '}'+

      '.harkig {'+
        'transition: all 1s;'+
        'transition-timing-function: linear;'+
      '}'+

      '#Uhr .zeigerfeld {'+
        'width: 100%;'+
        'height: 100%;'+
        'position: absolute;'+
      '}'+
  '</div>'+
  +markanzeigen_var+
    '.zwischenstriche .strich_gross {'+
      'position: absolute;'+
      'top: 50%;'+
      'left: 50%;'+
      'width: 10px;'+
      'height: 30px;'+
      'margin-left: -5px;'+
    '}'+

    '.zwischenstriche .strich_klein {'+
      'position: absolute;'+
      'top: 50%;'+
      'left: 50%;'+
      'width: 5px;'+
      'height: 20px;'+
      'margin-left: -2.5px;'+
    '}'+

    '.striche {'+
      'margin-top: '+document.getElementById("radius_mark").value+';'+
      'background: '+document.getElementById("color_mark").value+';'+
      'box-shadow: 0 0   '+markBSanzeigen_var+'px '+document.getElementById("color_BSmark").value+';'+
      'transition: all 0.5s;'+
    '}'+
  '</div>'+

  textangezeigt_var+

      '#liveanzeige {'+
        'transition: all 0.2s;'+
        'width: 100%;'+
        'height: 100%;'+
      '}'+
      '</style>'+
    '</head>'+
    '<body onmousemove="dreiD(event)">'+
    '<div id="liveanzeige">'+
      '<div id="Uhr">'+
        markanzeigen_var+
      zeigeranz_var+
      '</div>'+
      '<div class="Generator_zahlen"><div id="digital">'+
        '<div id="zeit"></div>'+
      '</div></div>'+
    '</div>'+
    '<script>'+
      '"use strict";'+
      '<div class="Generator_puls">var puls_gros = false;</div>'+

      'starten();'+

      'function starten() {'+
        '<div class="Generator_Mark">'+
          'var array = document.getElementsByClassName("zwischenstriche");'+
          'var grad = 0;'+

          'for (var i = 0; i < array.length; i++)'+
          '{'+
            'array[i].style.transform = "rotate("+grad+"deg)";'+
            'grad = grad + 30;'+
          '}'+

        '</div>'+
        'setInterval(zeitAnzeigen , 1000);'+
      '}'+

      '<div class="Generator_puls">function pulsMachen() {'+
          'if (puls_gros) {'+
            'document.getElementById("Uhr").style.boxShadow = "0 0 10px";'+
            'puls_gros = false;'+
          '}'+
          'else {'+
            'document.getElementById("Uhr").style.boxShadow = "0 0 100px";'+
            'puls_gros = true;'+
          '}'+
        '}</div>'+

      'function zeitAnzeigen() {'+

        '<div class="Generator_puls">pulsMachen();</div>'+

        'var zeit = new Date();'+
        'var h = zeit.getHours();'+
        'var m = zeit.getMinutes();'+
        'var s = zeit.getSeconds();'+

        '<div class="Generator_zeiger">var hdeg = h*30+180;'+
        'var mdeg = m*6+180;'+
        'var sdeg = s*6+180;'+

        'document.getElementById("h").style.transform = "rotate("+hdeg+"deg)";'+
        'document.getElementById("m").style.transform = "rotate("+mdeg+"deg)";'+
        'document.getElementById("s").style.transform = "rotate("+sdeg+"deg)";'+
      '</div>'+
        '<div class="Generator_zahlen">if(s < 10)'+
        '{'+
          's ="0"+ s;'+
        '}'+

        'if(m < 10)'+
        '{'+
          'm ="0"+ m;'+
        '}'+

        'document.getElementById("zeit").innerHTML = h + ":" + m + ":" + s;</div>'+
      '}'+
      '<div class="Generator_3d">'+
        'function dreiD(event) {'+
            'var x = event.clientX;'+
            'var y = event.clientY;'+
            'var x_g = window.screen.availWidth;'+
            'var y_g = window.screen.availHeight;'+

            'x /= x_g;'+
            'y /= y_g;'+

            'x = Math.round(x*100, 1);'+
            'y = Math.round(y*100, 1);'+
            'x /= 100;'+
            'y /= 100;'+

            'if(x < 0.55 && x > 0.45)'+
            '{'+
              'x = 0;'+
            '}'+
            'else if(x > 0.5)'+
            '{'+
              'x *= -1;'+
            '}'+
            'else {'+
              'x *= 2;'+
            '}'+

            'if(y < 0.55 && y > 0.45)'+
            '{'+
              'y = 0;'+
            '}'+
            'else if(y > 0.5)'+
            '{'+
              'y *= -1;'+
            '}'+
            'else {'+
              'y *= 2;'+
            '}'+
            'y *= -1;'+
            'document.getElementById("liveanzeige").style.transform = "rotate3d("+y+", "+x+", 0, <div class="float_left" id="starke3d_gen"></div>'+
        '}'+
      '</div>'+
    '</script>'+

    '</body>'+
  '</html>'
}
