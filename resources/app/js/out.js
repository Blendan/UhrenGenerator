function gernireOutput()
{
  if (zeigeranzBS)
  {
    var zeigeranzBS_var = 15;
  }else
  {
    var zeigeranzBS_var = 0;
  }


  var markanzeigen_var1 = " ";
  if(markanzeigen)
  {
    markanzeigen_var1 ='.zwischenstriche {\n'+
    'width: 100%;\n'+
    'height: 100%;\n'+
    'background: none;\n'+
    'position: absolute;\n'+
    '}\n';
  }

  if (markBSanzeigen)
  {
    var markBSanzeigen_var = 15;
  }
  else
  {
    var markBSanzeigen_var = 0;
  }

  if (schattentext)
  {
    var schattentext_var = 0;
  }
  else
  {
    var schattentext_var = 15;
  }


  var markanzeigen_var2 = "";
  if (markanzeigen)
  {
    markanzeigen_var2 ='<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_gross striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>'+'<div class="zwischenstriche"><div class="strich_klein striche"></div></div>';
  }

  var zeigeranz_var = "";
  var harkig_var = "";
  var sekunden_var = "";

  if (sextra)
  {
    harkig_var = " harkig";
  }

  if(s_anzeigen)
  {
    sekunden_var = '<div  id="s" class="zeigerfeld'+harkig_var+'">\n<div class="zeiger" id="s_zeiger"></div>\n</div>\n';
  }

  if (zeigeranz)
  {
    zeigeranz_var = '<div id="analog">\n'+
    '<div  id="h" class="zeigerfeld"><div class="zeiger" id="h_zeiger" ></div></div>\n'+
    '<div  id="m" class="zeigerfeld"><div class="zeiger" id="m_zeiger"></div></div>\n'+
    sekunden_var+
    '<div id="kreis"></div>\n'+
    '</div>\n';
  }

  var mark_abstand = parseInt(document.getElementById("radius_mark").value) -20;

  var textangezeigt_var = "";
  if (textangezeigt)
  {
    textangezeigt_var = '#zeit {\n'+
      'position: fixed;\n'+
      'top: '+document.getElementById("hohe_zahlen").value+'px;\n'+
      'left: 0;\n'+
      'width: 100%;\n'+
      'font-size: '+document.getElementById("grosse_zahlen").value+'px;\n'+
      'text-align: center;\n'+
      'text-shadow: 0 0 '+schattentext_var+' '+document.getElementById("color_textschatten").value+';\n'+
      'color: '+document.getElementById("color_zahlen").value+';\n'+
    '}';
  }

  var markanzeigen_var3 = " ";
  if (markanzeigen)
  {
    markanzeigen_var3 = 'var array = document.getElementsByClassName("zwischenstriche");'+
    'var grad = 0;'+
    'for (var i = 0; i < array.length; i++)'+
    '{'+
      'array[i].style.transform = "rotate("+grad+"deg)";'+
      'grad = grad + 30;'+
    '}';
  }

  var puls_an_var = "";
  if (puls_an)
  {
    puls_an_var = 'if (puls_gros) {'+
      'document.getElementById("Uhr").style.boxShadow = "0 0 10px";'+
      'puls_gros = false;'+
    '}'+
    'else {'+
      'document.getElementById("Uhr").style.boxShadow = "0 0 100px";'+
      'puls_gros = true;'+
    '}';
  }

  var dreidanz_var = "";
  if (dreidanz)
  {
    dreidanz_var = 'onmousemove="dreiD(event)"';
  }

  var out = '<!DOCTYPE html><html lang="de" dir="ltr">\n'+
  '<head><meta charset="utf-8"><title>Uhr</title><style>\n'+
      'html, body {\n'+
        'width: 100%;\n'+
        'height: 100%;\n'+
        'margin: 0;\n'+
        'padding: 0;\n'+
        'transition: all 0.3s;\n'+
        'transition-timing-function: linear;\n'+
        'overflow: hidden;\n'+
        'background : '+document.getElementById("color_hintergrund").value+';\n'+
      '}\n'+
      '#Uhr {\n'+
        'position: relative;\n'+
        'top: '+document.getElementById("abstand_oben").value+'px;\n'+
        'margin-left: auto;\n'+
        'margin-right: auto;\n'+
        'width: '+document.getElementById("size").value+'px;\n'+
        'height: '+document.getElementById("size").value+'px;\n'+
        'box-shadow: 0 0 50px '+document.getElementById("color_schatten").value+';\n'+
        'border: 1px solid '+document.getElementById("color_schatten").value+';\n'+
        'border-radius: '+document.getElementById("rundung").value+'px;\n'+
        'color : '+document.getElementById("color_zeiger").value+';\n'+
        'background: none;\n'+
        'transition: all 1s;\n'+
        'transition-timing-function: ease-in-out;\n'+
      '}\n'+

      '#Uhr #kreis{\n'+
        'position: absolute;\n'+
        'top: 50%;\n'+
        'left: 50%;\n'+
        'width: 20px;\n'+
        'height: 20px;\n'+
        'margin-left: -10px;\n'+
        'margin-top: -10px;\n'+
        'background: '+document.getElementById("color_zeiger").value+';\n'+
        'border: 1px solid black;\n'+
        'border-radius: 100%;\n'+
      '}\n'+

      '#Uhr .zeiger {\n'+
        'position: absolute;\n'+
        'top: 50%;\n'+
        'left: 50%;\n'+
        'width: 10px;\n'+
        'height: 10px;\n'+
        'margin-left: -5px;\n'+
        'margin-top: -5px;\n'+
        'background: '+document.getElementById("color_zeiger2").value+';\n'+
        'box-shadow: 0 0 '+  zeigeranzBS_var+'px '+document.getElementById("color_zeigerBS").value+';\n'+
      '}\n'+


      '#Uhr #h_zeiger{\n'+
        'border-top: '+document.getElementById("grosse_zeiger").value/2+'px solid '+document.getElementById("color_zeiger").value+';\n'+
      '}\n'+

      '#Uhr #m_zeiger{\n'+
        'border-top: '+document.getElementById("grosse_zeiger").value/1.5+'px solid '+document.getElementById("color_zeiger").value+';\n'+
      '}\n'+

      '#Uhr #s_zeiger{\n'+
        'border-top: '+document.getElementById("grosse_zeiger").value+'px solid '+document.getElementById("color_zeiger").value+';\n'+
      '}\n'+

      '.harkig {\n'+
        'transition: all 1s;\n'+
        'transition-timing-function: linear;\n'+
      '}\n'+

      '#Uhr .zeigerfeld {\n'+
        'width: 100%;\n'+
        'height: 100%;\n'+
        'position: absolute;\n'+
      '}\n'+

    markanzeigen_var1+

    '\n.zwischenstriche .strich_gross {\n'+
      'position: absolute;\n'+
      'top: 50%;\n'+
      'left: 50%;\n'+
      'width: 10px;\n'+
      'height: 30px;\n'+
      'margin-left: -5px;\n'+
    '}\n'+

    '.zwischenstriche .strich_klein {\n'+
      'position: absolute;\n'+
      'top: 50%;\n'+
      'left: 50%;\n'+
      'width: 5px;\n'+
      'height: 20px;\n'+
      'margin-left: -2.5px;\n'+
    '}\n'+

    '.striche {\n'+
      'margin-top: '+mark_abstand+'px;\n'+
      'background: '+document.getElementById("color_mark").value+';\n'+
      'box-shadow: 0 0   '+markBSanzeigen_var+'px '+document.getElementById("color_BSmark").value+';\n'+
      'transition: all 0.5s;\n'+
    '}\n'+

    textangezeigt_var+

      '#liveanzeige {\n'+
        'transition: all 0.2s;\n'+
        'width: 100%;\n'+
        'height: 100%;\n'+
      '}\n'+
      '</style>\n'+
    '</head>\n'+
    '<body'+dreidanz_var+'>\n'+
    '<div id="liveanzeige">\n'+
      '<div id="Uhr">\n'+
        markanzeigen_var2+
        zeigeranz_var+
      '<div class="Generator_zahlen"><div id="digital">\n'+
        '<div id="zeit"></div>\n'+
      '</div></div>\n'+
    '</div>\n'+
    '<script>\n'+
      '"use strict";\n'+
      'var puls_gros = false;\n'+

      'starten();\n'+

      'function starten() {\n'+
        markanzeigen_var3+'\n'+
        'setInterval(zeitAnzeigen , 1000);\n'+
      '}\n'+

      'function zeitAnzeigen() {\n'+

        puls_an_var+

        'var zeit = new Date();\n'+
        'var h = zeit.getHours();\n'+
        'var m = zeit.getMinutes();\n'+
        'var s = zeit.getSeconds();\n'+

        'var hdeg = h*30+180;\n'+
        'var mdeg = m*6+180;\n'+
        'var sdeg = s*6+180;\n'+

        'document.getElementById("h").style.transform = "rotate("+hdeg+"deg)";\n'+
        'document.getElementById("m").style.transform = "rotate("+mdeg+"deg)";\n'+
        'document.getElementById("s").style.transform = "rotate("+sdeg+"deg)";\n'+

        'if(s < 10)\n'+
        '{\n'+
          's ="0"+ s;\n'+
        '}\n'+

        'if(m < 10)\n'+
        '{\n'+
          'm ="0"+ m;\n'+
        '}\n'+

        'document.getElementById("zeit").innerHTML = h + ":" + m + ":" + s;\n'+
      '}\n'+
        'function dreiD(event) {\n'+
            'var x = event.clientX;\n'+
            'var y = event.clientY;\n'+
            'var x_g = window.screen.availWidth;\n'+
            'var y_g = window.screen.availHeight;\n'+

            'x /= x_g;\n'+
            'y /= y_g;\n'+

            'x = Math.round(x*100, 1);\n'+
            'y = Math.round(y*100, 1);\n'+
            'x /= 100;\n'+
            'y /= 100;\n'+

            'if(x < 0.55 && x > 0.45)\n'+
            '{\n'+
              'x = 0;\n'+
            '}\n'+
            'else if(x > 0.5)\n'+
            '{\n'+
              'x *= -1;\n'+
            '}\n'+
            'else {\n'+
              'x *= 2;\n'+
            '}\n'+

            'if(y < 0.55 && y > 0.45)\n'+
            '{\n'+
              'y = 0;\n'+
            '}\n'+
            'else if(y > 0.5)\n'+
            '{\n'+
              'y *= -1;\n'+
            '}\n'+
            'else {\n'+
              'y *= 2;\n'+
            '}\n'+
            'y *= -1;\n'+
            'document.getElementById("liveanzeige").style.transform = "rotate3d("+y+", "+x+", 0, '+document.getElementById("staerke_3d").value+')"\n'+
        '}\n'+
    '</script>\n'+

    '</body>\n'+
  '</html>';

  return out;
}

function saveFile()
{
  var fileName = "Clock.html";
  alert("Plese Save as .html");
  require('electron').remote.dialog.showSaveDialog((fileName) => {
      if (fileName === undefined)
      {
          return;
      }

      // fileName is a string that contains the path and filename created in the save file dialog.
      fs.writeFile(fileName, gernireOutput(), (err) => {
          if(err)
          {
              alert("An error ocurred creating the file "+ err.message)
          }
      });
  });
}
