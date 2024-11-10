/**
 * WORKING PROTOTYPE
 * LinkyBucket PWA 11/9/2024 : Version 1.0
 */

//Register service worker for caching on PWA installed device
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.warn("service worker registered"))
        .catch(err => console.warn("service worker not registered", err))
    })
}

//PWA capable
const iOSCanInstall = 'standalone' in window.navigator;

//Running PWA
const iOSIsInstalled = window.navigator.standalone === true;





var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}(); 

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=(t,e,i)=>{Object.keys(i).forEach((n=>{const s=i[n],r=e[n],a=r&&o(r)?"element":null==(l=r)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}))},l=t=>!(!o(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),c=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),h=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h(t.parentNode):null},d=()=>{},u=t=>{t.offsetHeight},f=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},p=[],m=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",(()=>{p.forEach((t=>t()))})),p.push(e)):e()},_=t=>{"function"==typeof t&&t()},b=(e,i,n=!0)=>{if(!n)return void _(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),_(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},v=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},y=/[^.]*(?=\..*)\.|.*/,w=/\..*/,E=/::\d+$/,A={};let T=1;const O={mouseenter:"mouseover",mouseleave:"mouseout"},C=/^(mouseenter|mouseleave)/i,k=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${T++}`||t.uidEvent||T++}function x(t){const e=L(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function D(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function S(t,e,i){const n="string"==typeof e,s=n?i:e;let o=P(t);return k.has(o)||(o=t),[n,s,o]}function N(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),C.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=S(e,i,n),l=x(t),c=l[a]||(l[a]={}),h=D(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=L(r,e.replace(y,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&j.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&j.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function I(t,e,i,n,s){const o=D(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function P(t){return t=t.replace(w,""),O[t]||t}const j={on(t,e,i,n){N(t,e,i,n,!1)},one(t,e,i,n){N(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=S(e,i,n),a=r!==e,l=x(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void I(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach((i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach((o=>{if(o.includes(n)){const n=s[o];I(t,e,i,n.originalHandler,n.delegationSelector)}}))}(t,l,i,e.slice(1))}));const h=l[r]||{};Object.keys(h).forEach((i=>{const n=i.replace(E,"");if(!a||e.includes(n)){const e=h[i];I(t,l,r,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=f(),s=P(e),o=e!==s,r=k.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach((t=>{Object.defineProperty(d,t,{get:()=>i[t]})})),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};class B{constructor(t){(t=r(t))&&(this._element=t,H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,i=!0){b(t,e,i)}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;j.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),c(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class W extends B{static get NAME(){return"alert"}close(){if(j.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),j.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(W,"close"),g(W);const $='[data-bs-toggle="button"]';class z extends B{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=z.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function q(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function F(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}j.on(document,"click.bs.button.data-api",$,(t=>{t.preventDefault();const e=t.target.closest($);z.getOrCreateInstance(e).toggle()})),g(z);const U={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${F(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${F(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=q(t.dataset[i])})),e},getDataAttribute:(t,e)=>q(t.getAttribute(`data-bs-${F(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},V={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!c(t)&&l(t)))}},K="carousel",X={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Y={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Q="next",G="prev",Z="left",J="right",tt={ArrowLeft:J,ArrowRight:Z},et="slid.bs.carousel",it="active",nt=".active.carousel-item";class st extends B{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=V.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return X}static get NAME(){return K}next(){this._slide(Q)}nextWhenVisible(){!document.hidden&&l(this._element)&&this.next()}prev(){this._slide(G)}pause(t){t||(this._isPaused=!0),V.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(s(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=V.findOne(nt,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void j.one(this._element,et,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const i=t>e?Q:G;this._slide(i,this._items[t])}_getConfig(t){return t={...X,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},a(K,t,Y),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?J:Z)}_addEventListeners(){this._config.keyboard&&j.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,"mouseenter.bs.carousel",(t=>this.pause(t))),j.on(this._element,"mouseleave.bs.carousel",(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),500+this._config.interval))};V.find(".carousel-item img",this._element).forEach((t=>{j.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()))})),this._pointerEvent?(j.on(this._element,"pointerdown.bs.carousel",(t=>e(t))),j.on(this._element,"pointerup.bs.carousel",(t=>n(t))),this._element.classList.add("pointer-event")):(j.on(this._element,"touchstart.bs.carousel",(t=>e(t))),j.on(this._element,"touchmove.bs.carousel",(t=>i(t))),j.on(this._element,"touchend.bs.carousel",(t=>n(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=tt[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?V.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===Q;return v(this._items,e,i,this._config.wrap)}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),n=this._getItemIndex(V.findOne(nt,this._element));return j.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:n,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=V.findOne(".active",this._indicatorsElement);e.classList.remove(it),e.removeAttribute("aria-current");const i=V.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add(it),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||V.findOne(nt,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),n=V.findOne(nt,this._element),s=this._getItemIndex(n),o=e||this._getItemByOrder(i,n),r=this._getItemIndex(o),a=Boolean(this._interval),l=i===Q,c=l?"carousel-item-start":"carousel-item-end",h=l?"carousel-item-next":"carousel-item-prev",d=this._orderToDirection(i);if(o&&o.classList.contains(it))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(o,d).defaultPrevented)return;if(!n||!o)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const f=()=>{j.trigger(this._element,et,{relatedTarget:o,direction:d,from:s,to:r})};if(this._element.classList.contains("slide")){o.classList.add(h),u(o),n.classList.add(c),o.classList.add(c);const t=()=>{o.classList.remove(c,h),o.classList.add(it),n.classList.remove(it,h,c),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,n,!0)}else n.classList.remove(it),o.classList.add(it),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[J,Z].includes(t)?m()?t===Z?G:Q:t===Z?Q:G:t}_orderToDirection(t){return[Q,G].includes(t)?m()?t===G?Z:J:t===G?J:Z:t}static carouselInterface(t,e){const i=st.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){st.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=n(this);if(!e||!e.classList.contains("carousel"))return;const i={...U.getDataAttributes(e),...U.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(i.interval=!1),st.carouselInterface(e,i),s&&st.getInstance(e).to(s),t.preventDefault()}}j.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",st.dataApiClickHandler),j.on(window,"load.bs.carousel.data-api",(()=>{const t=V.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)st.carouselInterface(t[e],st.getInstance(t[e]))})),g(st);const ot="collapse",rt={toggle:!0,parent:null},at={toggle:"boolean",parent:"(null|element)"},lt="show",ct="collapse",ht="collapsing",dt="collapsed",ut=":scope .collapse .collapse",ft='[data-bs-toggle="collapse"]';class pt extends B{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=V.find(ft);for(let t=0,e=n.length;t<e;t++){const e=n[t],s=i(e),o=V.find(s).filter((t=>t===this._element));null!==s&&o.length&&(this._selector=s,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return rt}static get NAME(){return ot}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=V.find(ut,this._config.parent);e=V.find(".collapse.show, .collapse.collapsing",this._config.parent).filter((e=>!t.includes(e)))}const i=V.findOne(this._selector);if(e.length){const n=e.find((t=>i!==t));if(t=n?pt.getInstance(n):null,t&&t._isTransitioning)return}if(j.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e.forEach((e=>{i!==e&&pt.getOrCreateInstance(e,{toggle:!1}).hide(),t||H.set(e,"bs.collapse",null)}));const n=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[n]="",j.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(j.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,u(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],i=n(e);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),j.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_getConfig(t){return(t={...rt,...U.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=r(t.parent),a(ot,t,at),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=V.find(ut,this._config.parent);V.find(ft,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=n(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(dt):t.classList.add(dt),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}j.on(document,"click.bs.collapse.data-api",ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this);V.find(e).forEach((t=>{pt.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),g(pt);var mt="top",gt="bottom",_t="right",bt="left",vt="auto",yt=[mt,gt,_t,bt],wt="start",Et="end",At="clippingParents",Tt="viewport",Ot="popper",Ct="reference",kt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+Et])}),[]),Lt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+Et])}),[]),xt="beforeRead",Dt="read",St="afterRead",Nt="beforeMain",It="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",Bt=[xt,Dt,St,Nt,It,Pt,jt,Mt,Ht];function Rt(t){return t?(t.nodeName||"").toLowerCase():null}function Wt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function $t(t){return t instanceof Wt(t).Element||t instanceof Element}function zt(t){return t instanceof Wt(t).HTMLElement||t instanceof HTMLElement}function qt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Wt(t).ShadowRoot||t instanceof ShadowRoot)}const Ft={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Rt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Rt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Ut(t){return t.split("-")[0]}function Vt(t,e){var i=t.getBoundingClientRect();return{width:i.width/1,height:i.height/1,top:i.top/1,right:i.right/1,bottom:i.bottom/1,left:i.left/1,x:i.left/1,y:i.top/1}}function Kt(t){var e=Vt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Xt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&qt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Yt(t){return Wt(t).getComputedStyle(t)}function Qt(t){return["table","td","th"].indexOf(Rt(t))>=0}function Gt(t){return(($t(t)?t.ownerDocument:t.document)||window.document).documentElement}function Zt(t){return"html"===Rt(t)?t:t.assignedSlot||t.parentNode||(qt(t)?t.host:null)||Gt(t)}function Jt(t){return zt(t)&&"fixed"!==Yt(t).position?t.offsetParent:null}function te(t){for(var e=Wt(t),i=Jt(t);i&&Qt(i)&&"static"===Yt(i).position;)i=Jt(i);return i&&("html"===Rt(i)||"body"===Rt(i)&&"static"===Yt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&zt(t)&&"fixed"===Yt(t).position)return null;for(var i=Zt(t);zt(i)&&["html","body"].indexOf(Rt(i))<0;){var n=Yt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function ee(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var ie=Math.max,ne=Math.min,se=Math.round;function oe(t,e,i){return ie(t,ne(e,i))}function re(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ae(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const le={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Ut(i.placement),l=ee(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return re("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ae(t,yt))}(s.padding,i),d=Kt(o),u="y"===l?mt:bt,f="y"===l?gt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=te(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=oe(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Xt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(t){return t.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function de(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:se(se(e*n)/n)||0,y:se(se(i*n)/n)||0}}(r):"function"==typeof h?h(r):r,u=d.x,f=void 0===u?0:u,p=d.y,m=void 0===p?0:p,g=r.hasOwnProperty("x"),_=r.hasOwnProperty("y"),b=bt,v=mt,y=window;if(c){var w=te(i),E="clientHeight",A="clientWidth";w===Wt(i)&&"static"!==Yt(w=Gt(i)).position&&"absolute"===a&&(E="scrollHeight",A="scrollWidth"),w=w,s!==mt&&(s!==bt&&s!==_t||o!==Et)||(v=gt,m-=w[E]-n.height,m*=l?1:-1),s!==bt&&(s!==mt&&s!==gt||o!==Et)||(b=_t,f-=w[A]-n.width,f*=l?1:-1)}var T,O=Object.assign({position:a},c&&he);return l?Object.assign({},O,((T={})[v]=_?"0":"",T[b]=g?"0":"",T.transform=(y.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",T)):Object.assign({},O,((e={})[v]=_?m+"px":"",e[b]=g?f+"px":"",e.transform="",e))}const ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Ut(e.placement),variation:ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,de(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,de(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var fe={passive:!0};const pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Wt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,fe)})),a&&l.addEventListener("resize",i.update,fe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,fe)})),a&&l.removeEventListener("resize",i.update,fe)}},data:{}};var me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(t){return t.replace(/left|right|bottom|top/g,(function(t){return me[t]}))}var _e={start:"end",end:"start"};function be(t){return t.replace(/start|end/g,(function(t){return _e[t]}))}function ve(t){var e=Wt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ye(t){return Vt(Gt(t)).left+ve(t).scrollLeft}function we(t){var e=Yt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ee(t){return["html","body","#document"].indexOf(Rt(t))>=0?t.ownerDocument.body:zt(t)&&we(t)?t:Ee(Zt(t))}function Ae(t,e){var i;void 0===e&&(e=[]);var n=Ee(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Wt(n),r=s?[o].concat(o.visualViewport||[],we(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ae(Zt(r)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Oe(t,e){return e===Tt?Te(function(t){var e=Wt(t),i=Gt(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+ye(t),y:a}}(t)):zt(e)?function(t){var e=Vt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Te(function(t){var e,i=Gt(t),n=ve(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ie(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ie(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ye(t),l=-n.scrollTop;return"rtl"===Yt(s||i).direction&&(a+=ie(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Gt(t)))}function Ce(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Ut(s):null,r=s?ce(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case mt:e={x:a,y:i.y-n.height};break;case gt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?ee(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Et:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?At:o,a=i.rootBoundary,l=void 0===a?Tt:a,c=i.elementContext,h=void 0===c?Ot:c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=re("number"!=typeof p?p:ae(p,yt)),g=h===Ot?Ct:Ot,_=t.rects.popper,b=t.elements[u?g:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Ae(Zt(t)),i=["absolute","fixed"].indexOf(Yt(t).position)>=0&&zt(t)?te(t):t;return $t(i)?e.filter((function(t){return $t(t)&&Xt(t,i)&&"body"!==Rt(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Oe(t,i);return e.top=ie(n.top,e.top),e.right=ne(n.right,e.right),e.bottom=ne(n.bottom,e.bottom),e.left=ie(n.left,e.left),e}),Oe(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}($t(b)?b:b.contextElement||Gt(t.elements.popper),r,l),y=Vt(t.elements.reference),w=Ce({reference:y,element:_,strategy:"absolute",placement:s}),E=Te(Object.assign({},_,w)),A=h===Ot?E:y,T={top:v.top-A.top+m.top,bottom:A.bottom-v.bottom+m.bottom,left:v.left-A.left+m.left,right:A.right-v.right+m.right},O=t.modifiersData.offset;if(h===Ot&&O){var C=O[s];Object.keys(T).forEach((function(t){var e=[_t,gt].indexOf(t)>=0?1:-1,i=[mt,gt].indexOf(t)>=0?"y":"x";T[t]+=C[i]*e}))}return T}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?Lt:l,h=ce(n),d=h?a?kt:kt.filter((function(t){return ce(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ke(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Ut(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const xe={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=Ut(g),b=l||(_!==g&&p?function(t){if(Ut(t)===vt)return[];var e=ge(t);return[be(t),e,be(e)]}(g):[ge(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(Ut(i)===vt?Le(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=Ut(C),L=ce(C)===wt,x=[mt,gt].indexOf(k)>=0,D=x?"width":"height",S=ke(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),N=x?L?_t:bt:L?gt:mt;y[D]>w[D]&&(N=ge(N));var I=ge(N),P=[];if(o&&P.push(S[k]<=0),a&&P.push(S[N]<=0,S[I]<=0),P.every((function(t){return t}))){T=C,A=!1;break}E.set(C,P)}if(A)for(var j=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Se(t){return[mt,_t,gt,bt].some((function(e){return t[e]>=0}))}const Ne={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ke(e,{elementContext:"reference"}),a=ke(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Se(l),d=Se(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=Lt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Ut(t),s=[bt,mt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Pe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Ce({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ke(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Ut(e.placement),b=ce(e.placement),v=!b,y=ee(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?mt:bt,L="y"===y?gt:_t,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],N=E[y]-g[L],I=f?-T[x]/2:0,P=b===wt?A[x]:T[x],j=b===wt?-T[x]:-A[x],M=e.elements.arrow,H=f&&M?Kt(M):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},R=B[k],W=B[L],$=oe(0,A[x],H[x]),z=v?A[x]/2-I-$-R-O:P-$-R-O,q=v?-A[x]/2+I+$+W+O:j+$+W+O,F=e.elements.arrow&&te(e.elements.arrow),U=F?"y"===y?F.clientTop||0:F.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+z-V-U,X=E[y]+q-V;if(o){var Y=oe(f?ne(S,K):S,D,f?ie(N,X):N);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?mt:bt,G="x"===y?gt:_t,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=oe(f?ne(J,K):J,Z,f?ie(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function Me(t,e,i){void 0===i&&(i=!1);var n=zt(e);zt(e)&&function(t){var e=t.getBoundingClientRect();e.width,t.offsetWidth,e.height,t.offsetHeight}(e);var s,o,r=Gt(e),a=Vt(t),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!i)&&(("body"!==Rt(e)||we(r))&&(l=(s=e)!==Wt(s)&&zt(s)?{scrollLeft:(o=s).scrollLeft,scrollTop:o.scrollTop}:ve(s)),zt(e)?((c=Vt(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=ye(r))),{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var Be={placement:"bottom",modifiers:[],strategy:"absolute"};function Re(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function We(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?Be:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:$t(t)?Ae(t):t.contextElement?Ae(t.contextElement):[],popper:Ae(e)};var r,c,u=function(t){var e=He(t);return Bt.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(Re(e,i)){a.rects={reference:Me(e,te(i),"fixed"===a.options.strategy),popper:Kt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!Re(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var $e=We(),ze=We({defaultModifiers:[pe,Pe,ue,Ft]}),qe=We({defaultModifiers:[pe,Pe,ue,Ft,Ie,xe,je,le,Ne]});const Fe=Object.freeze({__proto__:null,popperGenerator:We,detectOverflow:ke,createPopperBase:$e,createPopper:qe,createPopperLite:ze,top:mt,bottom:gt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:Et,clippingParents:At,viewport:Tt,popper:Ot,reference:Ct,variationPlacements:kt,placements:Lt,beforeRead:xt,read:Dt,afterRead:St,beforeMain:Nt,main:It,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:Bt,applyStyles:Ft,arrow:le,computeStyles:ue,eventListeners:pe,flip:xe,hide:Ne,offset:Ie,popperOffsets:Pe,preventOverflow:je}),Ue="dropdown",Ve="Escape",Ke="Space",Xe="ArrowUp",Ye="ArrowDown",Qe=new RegExp("ArrowUp|ArrowDown|Escape"),Ge="click.bs.dropdown.data-api",Ze="keydown.bs.dropdown.data-api",Je="show",ti='[data-bs-toggle="dropdown"]',ei=".dropdown-menu",ii=m()?"top-end":"top-start",ni=m()?"top-start":"top-end",si=m()?"bottom-end":"bottom-start",oi=m()?"bottom-start":"bottom-end",ri=m()?"left-start":"right-start",ai=m()?"right-start":"left-start",li={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ci={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class hi extends B{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return li}static get DefaultType(){return ci}static get NAME(){return Ue}toggle(){return this._isShown()?this.hide():this.show()}show(){if(c(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element};if(j.trigger(this._element,"show.bs.dropdown",t).defaultPrevented)return;const e=hi.getParentFromElement(this._element);this._inNavbar?U.setDataAttribute(this._menu,"popper","none"):this._createPopper(e),"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((t=>j.on(t,"mouseover",d))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Je),this._element.classList.add(Je),j.trigger(this._element,"shown.bs.dropdown",t)}hide(){if(c(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){j.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>j.off(t,"mouseover",d))),this._popper&&this._popper.destroy(),this._menu.classList.remove(Je),this._element.classList.remove(Je),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...U.getDataAttributes(this._element),...t},a(Ue,t,this.constructor.DefaultType),"object"==typeof t.reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if(void 0===Fe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:o(this._config.reference)?e=r(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=qe(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(Je)}_getMenuElement(){return V.next(this._element,ei)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ri;if(t.classList.contains("dropstart"))return ai;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ni:ii:e?oi:si}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(l);i.length&&v(i,e,t===Ye,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=hi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(2===t.button||"keyup"===t.type&&"Tab"!==t.key))return;const e=V.find(ti);for(let i=0,n=e.length;i<n;i++){const n=hi.getInstance(e[i]);if(!n||!1===n._config.autoClose)continue;if(!n._isShown())continue;const s={relatedTarget:n._element};if(t){const e=t.composedPath(),i=e.includes(n._menu);if(e.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(s.clickEvent=t)}n._completeHide(s)}}static getParentFromElement(t){return n(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Ke||t.key!==Ve&&(t.key!==Ye&&t.key!==Xe||t.target.closest(ei)):!Qe.test(t.key))return;const e=this.classList.contains(Je);if(!e&&t.key===Ve)return;if(t.preventDefault(),t.stopPropagation(),c(this))return;const i=this.matches(ti)?this:V.prev(this,ti)[0],n=hi.getOrCreateInstance(i);if(t.key!==Ve)return t.key===Xe||t.key===Ye?(e||n.show(),void n._selectMenuItem(t)):void(e&&t.key!==Ke||hi.clearMenus());n.hide()}}j.on(document,Ze,ti,hi.dataApiKeydownHandler),j.on(document,Ze,ei,hi.dataApiKeydownHandler),j.on(document,Ge,hi.clearMenus),j.on(document,"keyup.bs.dropdown.data-api",hi.clearMenus),j.on(document,Ge,ti,(function(t){t.preventDefault(),hi.getOrCreateInstance(this).toggle()})),g(hi);const di=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ui=".sticky-top";class fi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(di,"paddingRight",(e=>e+t)),this._setElementAttributes(ui,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=`${i(Number.parseFloat(s))}px`}))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(di,"paddingRight"),this._resetElementAttributes(ui,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&U.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=U.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(U.removeDataAttribute(t,e),t.style[e]=i)}))}_applyManipulationCallback(t,e){o(t)?e(t):V.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const pi={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},mi={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},gi="show",_i="mousedown.bs.backdrop";class bi{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&u(this._getElement()),this._getElement().classList.add(gi),this._emulateAnimation((()=>{_(t)}))):_(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(gi),this._emulateAnimation((()=>{this.dispose(),_(t)}))):_(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...pi,..."object"==typeof t?t:{}}).rootElement=r(t.rootElement),a("backdrop",t,mi),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),j.on(this._getElement(),_i,(()=>{_(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(j.off(this._element,_i),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){b(t,this._getElement(),this._config.isAnimated)}}const vi={trapElement:null,autofocus:!0},yi={trapElement:"element",autofocus:"boolean"},wi=".bs.focustrap",Ei="backward";class Ai{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),j.off(document,wi),j.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),j.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,wi))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const n=V.focusableChildren(i);0===n.length?i.focus():this._lastTabNavDirection===Ei?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Ei:"forward")}_getConfig(t){return t={...vi,..."object"==typeof t?t:{}},a("focustrap",t,yi),t}}const Ti="modal",Oi="Escape",Ci={backdrop:!0,keyboard:!0,focus:!0},ki={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Li="hidden.bs.modal",xi="show.bs.modal",Di="resize.bs.modal",Si="click.dismiss.bs.modal",Ni="keydown.dismiss.bs.modal",Ii="mousedown.dismiss.bs.modal",Pi="modal-open",ji="show",Mi="modal-static";class Hi extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=V.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new fi}static get Default(){return Ci}static get NAME(){return Ti}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||j.trigger(this._element,xi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Pi),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),j.on(this._dialog,Ii,(()=>{j.one(this._element,"mouseup.dismiss.bs.modal",(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;if(j.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ji),j.off(this._element,Si),j.off(this._dialog,Ii),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((t=>j.off(t,".bs.modal"))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ai({trapElement:this._element})}_getConfig(t){return t={...Ci,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},a(Ti,t,ki),t}_showElement(t){const e=this._isAnimated(),i=V.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&u(this._element),this._element.classList.add(ji),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,e)}_setEscapeEvent(){this._isShown?j.on(this._element,Ni,(t=>{this._config.keyboard&&t.key===Oi?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Oi||this._triggerBackdropTransition()})):j.off(this._element,Ni)}_setResizeEvent(){this._isShown?j.on(window,Di,(()=>this._adjustDialog())):j.off(window,Di)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Pi),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,Li)}))}_showBackdrop(t){j.on(this._element,Si,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains(Mi)||(n||(i.overflowY="hidden"),t.add(Mi),this._queueCallback((()=>{t.remove(Mi),n||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!m()||i&&!t&&m())&&(this._element.style.paddingLeft=`${e}px`),(i&&!t&&!m()||!i&&t&&m())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Hi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}j.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,xi,(t=>{t.defaultPrevented||j.one(e,Li,(()=>{l(this)&&this.focus()}))}));const i=V.findOne(".modal.show");i&&Hi.getInstance(i).hide(),Hi.getOrCreateInstance(e).toggle(this)})),R(Hi),g(Hi);const Bi="offcanvas",Ri={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},$i="show",zi=".offcanvas.show",qi="hidden.bs.offcanvas";class Fi extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Bi}static get Default(){return Ri}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||j.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new fi).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add($i),this._queueCallback((()=>{this._config.scroll||this._focustrap.activate(),j.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(j.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove($i),this._backdrop.hide(),this._queueCallback((()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new fi).reset(),j.trigger(this._element,qi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Ri,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},a(Bi,t,Wi),t}_initializeBackDrop(){return new bi({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Ai({trapElement:this._element})}_addEventListeners(){j.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=Fi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}j.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),c(this))return;j.one(e,qi,(()=>{l(this)&&this.focus()}));const i=V.findOne(zi);i&&i!==e&&Fi.getInstance(i).hide(),Fi.getOrCreateInstance(e).toggle(this)})),j.on(window,"load.bs.offcanvas.data-api",(()=>V.find(zi).forEach((t=>Fi.getOrCreateInstance(t).show())))),R(Fi),g(Fi);const Ui=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Vi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ki=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Xi=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!Ui.has(i)||Boolean(Vi.test(t.nodeValue)||Ki.test(t.nodeValue));const n=e.filter((t=>t instanceof RegExp));for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Yi(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=s.length;t<i;t++){const i=s[t],n=i.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){i.remove();continue}const o=[].concat(...i.attributes),r=[].concat(e["*"]||[],e[n]||[]);o.forEach((t=>{Xi(t,r)||i.removeAttribute(t.nodeName)}))}return n.body.innerHTML}const Qi="tooltip",Gi=new Set(["sanitize","allowList","sanitizeFn"]),Zi={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ji={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},tn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},en={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},nn="fade",sn="show",on="show",rn="out",an=".tooltip-inner",ln=".modal",cn="hide.bs.modal",hn="hover",dn="focus";class un extends B{constructor(t,e){if(void 0===Fe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return tn}static get NAME(){return Qi}static get Event(){return en}static get DefaultType(){return Zi}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(sn))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(ln),cn,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=j.trigger(this._element,this.constructor.Event.SHOW),e=h(this._element),i=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!i)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(an).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),s=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME);n.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&n.classList.add(nn);const o="function"==typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,r=this._getAttachment(o);this._addAttachmentClass(r);const{container:a}=this._config;H.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(n),j.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=qe(this._element,n,this._getPopperConfig(r)),n.classList.add(sn);const l=this._resolvePossibleFunction(this._config.customClass);l&&n.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{j.on(t,"mouseover",d)}));const c=this.tip.classList.contains(nn);this._queueCallback((()=>{const t=this._hoverState;this._hoverState=null,j.trigger(this._element,this.constructor.Event.SHOWN),t===rn&&this._leave(null,this)}),this.tip,c)}hide(){if(!this._popper)return;const t=this.getTipElement();if(j.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove(sn),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>j.off(t,"mouseover",d))),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains(nn);this._queueCallback((()=>{this._isWithActiveTrigger()||(this._hoverState!==on&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())}),this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(nn,sn),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),an)}_sanitizeAndSetContent(t,e,i){const n=V.findOne(i,t);e||!n?this.setElementContent(n,e):n.remove()}setElementContent(t,e){if(null!==t)return o(e)?(e=r(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Yi(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Ji[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach((t=>{if("click"===t)j.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if("manual"!==t){const e=t===hn?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=t===hn?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;j.on(this._element,e,this._config.selector,(t=>this._enter(t))),j.on(this._element,i,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(ln),cn,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?dn:hn]=!0),e.getTipElement().classList.contains(sn)||e._hoverState===on?e._hoverState=on:(clearTimeout(e._timeout),e._hoverState=on,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===on&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?dn:hn]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=rn,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===rn&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=U.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Gi.has(t)&&delete e[t]})),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a(Qi,t,this.constructor.DefaultType),t.sanitize&&(t.template=Yi(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),i=t.getAttribute("class").match(e);null!==i&&i.length>0&&i.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=un.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(un);const fn={...un.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},pn={...un.DefaultType,content:"(string|element|function)"},mn={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class gn extends un{static get Default(){return fn}static get NAME(){return"popover"}static get Event(){return mn}static get DefaultType(){return pn}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(t,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(t){return this.each((function(){const e=gn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(gn);const _n="scrollspy",bn={offset:10,method:"auto",target:""},vn={offset:"number",method:"string",target:"(string|element)"},yn="active",wn=".nav-link, .list-group-item, .dropdown-item",En="position";class An extends B{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,j.on(this._scrollElement,"scroll.bs.scrollspy",(()=>this._process())),this.refresh(),this._process()}static get Default(){return bn}static get NAME(){return _n}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":En,e="auto"===this._config.method?t:this._config.method,n=e===En?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),V.find(wn,this._config.target).map((t=>{const s=i(t),o=s?V.findOne(s):null;if(o){const t=o.getBoundingClientRect();if(t.width||t.height)return[U[e](o).top+n,s]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){j.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){return(t={...bn,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target=r(t.target)||document.documentElement,a(_n,t,vn),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=wn.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),i=V.findOne(e.join(","),this._config.target);i.classList.add(yn),i.classList.contains("dropdown-item")?V.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(yn):V.parents(i,".nav, .list-group").forEach((t=>{V.prev(t,".nav-link, .list-group-item").forEach((t=>t.classList.add(yn))),V.prev(t,".nav-item").forEach((t=>{V.children(t,".nav-link").forEach((t=>t.classList.add(yn)))}))})),j.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){V.find(wn,this._config.target).filter((t=>t.classList.contains(yn))).forEach((t=>t.classList.remove(yn)))}static jQueryInterface(t){return this.each((function(){const e=An.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(window,"load.bs.scrollspy.data-api",(()=>{V.find('[data-bs-spy="scroll"]').forEach((t=>new An(t)))})),g(An);const Tn="active",On="fade",Cn="show",kn=".active",Ln=":scope > li > .active";class xn extends B{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Tn))return;let t;const e=n(this._element),i=this._element.closest(".nav, .list-group");if(i){const e="UL"===i.nodeName||"OL"===i.nodeName?Ln:kn;t=V.find(e,i),t=t[t.length-1]}const s=t?j.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if(j.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==s&&s.defaultPrevented)return;this._activate(this._element,i);const o=()=>{j.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),j.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,o):o()}_activate(t,e,i){const n=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?V.children(e,kn):V.find(Ln,e))[0],s=i&&n&&n.classList.contains(On),o=()=>this._transitionComplete(t,n,i);n&&s?(n.classList.remove(Cn),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,i){if(e){e.classList.remove(Tn);const t=V.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove(Tn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(Tn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u(t),t.classList.contains(On)&&t.classList.add(Cn);let n=t.parentNode;if(n&&"LI"===n.nodeName&&(n=n.parentNode),n&&n.classList.contains("dropdown-menu")){const e=t.closest(".dropdown");e&&V.find(".dropdown-toggle",e).forEach((t=>t.classList.add(Tn))),t.setAttribute("aria-expanded",!0)}i&&i()}static jQueryInterface(t){return this.each((function(){const e=xn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),c(this)||xn.getOrCreateInstance(this).show()})),g(xn);const Dn="toast",Sn="hide",Nn="show",In="showing",Pn={animation:"boolean",autohide:"boolean",delay:"number"},jn={animation:!0,autohide:!0,delay:5e3};class Mn extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Pn}static get Default(){return jn}static get NAME(){return Dn}show(){j.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Sn),u(this._element),this._element.classList.add(Nn),this._element.classList.add(In),this._queueCallback((()=>{this._element.classList.remove(In),j.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this._element.classList.contains(Nn)&&(j.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(In),this._queueCallback((()=>{this._element.classList.add(Sn),this._element.classList.remove(In),this._element.classList.remove(Nn),j.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains(Nn)&&this._element.classList.remove(Nn),super.dispose()}_getConfig(t){return t={...jn,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},a(Dn,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),j.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),j.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),j.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Mn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(Mn),g(Mn),{Alert:W,Button:z,Carousel:st,Collapse:pt,Dropdown:hi,Modal:Hi,Offcanvas:Fi,Popover:gn,ScrollSpy:An,Tab:xn,Toast:Mn,Tooltip:un}})); 


function setupExportButton() {

    const exportButton = document.getElementById('export-data-button');
  		
    exportButton.addEventListener('click', ( event )=>{

        event.preventDefault();

        const fileName = 'linkybucket.json';

        const exportData = {
            'fileType' : 'jsonlinkybucketimport',
            'linkList' : APP_GLOBALS.linkList
        };

        const data = JSON.stringify(exportData);

        //setup download link
        const link = document.createElement('a');
        link.setAttribute('download', fileName);

        //setup file for download
        if(Blob !== undefined) {
            const blob = new Blob([data], { type: 'text/plain' });
            link.setAttribute('href', URL.createObjectURL(blob));
        } else {
            link.setAttribute('href', 'data:text/plain,' + encodeURIComponent(data));
        }

        //auto-download file
        ~window.navigator.userAgent.indexOf('Edge')
            && (fileName = fileName.replace(/[&\/\\#,+$~%.'':*?<>{}]/g, '_')); /* Edge */

        document.getElementById('button-export-file').appendChild(link);
        link.click();
        document.getElementById('button-export-file').removeChild(link);
        
    });
}

function isURL(str) {
    str = str.replaceAll('$','');
    str = str.replaceAll('@','');

    const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
    );
    return pattern.test(str);
}


/**
 * function setAppGlobals
 * sets APP_GLOBALS values
 */
function setAppGlobals() {

    const storedData = localStorage.getItem(APP_GLOBALS_CONFIG.storName);
    const data = ( storedData ) ? JSON.parse(storedData) : APP_GLOBALS_CONFIG;

    APP_GLOBALS.agreement = data.agreement;
    APP_GLOBALS.userName = data.userName;
    APP_GLOBALS.linkList = data.linkList;
    APP_GLOBALS.userImage = data.userImage;
    APP_GLOBALS.linkTypes = data.linkTypes;
    APP_GLOBALS.theme = data.theme;
}




/**
 * function setPages
 * sets APP_GLOBALS pages
 */
function setPages() {
    APP_GLOBALS.pages = {
        'linkList' : document.getElementById('page-links-list'),
        'linkDetail' : document.getElementById('page-link-details')
    };
}

/**
 * function showPage
 * hides and shows
 */
function showPage(pageName) {
    
    const pages = APP_GLOBALS.pages;

    for (let key in pages) {
        if ( key === pageName ) {
            pages[key].classList.remove('d-none');
        } else {
            pages[key].classList.add('d-none');
        }
    }
}

/**
 * function updateSavedData
 * save the current state to disc
 */
function updateSavedData() {

    const data = JSON.stringify(APP_GLOBALS);
    localStorage.setItem(APP_GLOBALS_CONFIG.storName,data);
}

/**
 * function deleteAllSavedData
 * deletes all saved data and rerender page.
 */
function deleteAllSavedData() {

    const data = JSON.stringify(APP_GLOBALS_CONFIG);
    localStorage.setItem(APP_GLOBALS_CONFIG.storName,data);

    setAppGlobals();
    renderLinkAccordions();
    renderProfileName();
    renderProfileImage();

    lock();
}

/**
 * function setAgreementStatus
 * update user agreement status
 */
function setAgreementStatus(status) {

    APP_GLOBALS.agreement = status;
    updateSavedData();
    lock();
}

/**
 * function getUUID
 * generates a UUID string
 * @return {string}
 */
function getUUID() {
    return crypto.getRandomValues(new Uint32Array(4)).join('-');
}

/**
 * function getBase64
 * generates a Base64 string from a file blob
 * @param file {blob}
 * @return {string}
 */
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

/**
 * function getFileContents
 * generates a string from a file blob
 * @param file {blob}
 * @return {string}
 */
function getFileContents(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

/**
 * function handleRemoveClick
 * removes a link and re-renders list
 * @param event {event}
 * @param id {string}
 */
function handleRemoveClick(event,id){
    event.preventDefault();
    event.stopPropagation();

    renderRemoveConfirmModal(id);
}

/**
 * function handleEditClick
 * @param event {event}
 * @param id {string}
 */
function handleEditClick(event,id){
    event.preventDefault();
    event.stopPropagation();

    renderFormModal(id);
}

/**
 * function handleDetailClick
 * Hydrated link data in modal and opens modal
 * @param id {string}
 */
function handleDetailClick(id){

    renderDetailPageOverlay(id);
}












/**
 * function setupCameraModal
 * Setup events for the modal
 */
function setupCameraModal(){

  const cameraButton = document.getElementById('camera-button');
  const modal = document.getElementById('cameraModal');
  const addBtnEl = modal.querySelector('#addCodeButton');
  const navBtnEl = modal.querySelector('#navigateCodeButton');
  const closeBtnEl = modal.querySelector('.modal-close-button');
  const videoElement = modal.querySelector('video');
  const camerSupported = navigator.mediaDevices && navigator.mediaDevices.getUserMedia;

  cameraButton.disabled = !camerSupported;
  
  if ( camerSupported ) {

    //set button to render camera feed modal
    cameraButton.addEventListener('click', (event)=>{

        renderCameraModal();
    });

    //set camera feed modal
    APP_GLOBALS.cameraModal = new bootstrap.Modal(modal, {keyboard: false});

    //set add button in camera feed modal
    addBtnEl.addEventListener('click', (event)=>{
      closeBtnEl.click();
      renderFormModal(null,'uncategorized');
    });

    navBtnEl.addEventListener('click', (event)=>{
      closeBtnEl.click();
    });

    //close video stream and stop scanning
    const closeVideoStream = ()=>{

      if (APP_GLOBALS.scanning) {
        clearInterval(APP_GLOBALS.scanning);
      }

      if (videoElement) {
        videoElement.pause();
        videoElement.src = "";
        videoElement.remove();
      }

      if (APP_GLOBALS.stream && APP_GLOBALS.stream.getTracks()) {
        const tracks = APP_GLOBALS.stream.getTracks();

        tracks.forEach((track)=>{
          track.stop();
        });
      }

    };

    //handle modal close and close video feed
    const callbackFunc = (mutationsList, observer)=>{
      mutationsList.forEach(mutation => {
          if (mutation.attributeName === 'class') {
              closeVideoStream();
          }
      })
    };
    const mutationObserver = new MutationObserver(callbackFunc);
    mutationObserver.observe(modal, { attributes: true });
  }
}

/**
 * function drawLine
 * Displays outlines in canvas
 */
function drawLine(ctx, begin, end, color) {
  ctx.beginPath();
  ctx.moveTo(begin.x, begin.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
}

/**
 * function renderCameraModal
 * Displays the Camera Modal
 */
function renderCameraModal(){

  //open modal
  const modal = document.getElementById('cameraModal');
  const closEl = modal.querySelector('.modal-close-button');
  const outputField = modal.querySelector('#scanned-output');
  const addBtnEl = modal.querySelector('#addCodeButton');
  const navBtnEl = modal.querySelector('#navigateCodeButton');
  const videoDisplay = modal.querySelector('#video-display');
  const canvas = document.createElement('canvas');
  const video = document.createElement('video');
  const spinner = modal.querySelector('.spinner-ring');

  spinner.classList.add('loading');

  addBtnEl.classList.add('hide');
  navBtnEl.classList.add('hide');

  APP_GLOBALS.clipboard = "";
  outputField.innerText = "Scanning for qr codes ...";

  videoDisplay.innerHTML = '';
  videoDisplay.appendChild(video);
  videoDisplay.appendChild(canvas);

  const constraints = { 
    audio: false,
    video: { facingMode: "environment" } 
  };

  const setVideoCam = async ()=>{

    // If browser supports the API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      try {

        // Use facingMode: environment to attemt to get the front camera on phones
        navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{

          APP_GLOBALS.stream = stream;
          video.srcObject = stream;
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          video.play();

          const dimensions = video.getBoundingClientRect();

          canvas.width = dimensions.width;//video.videoWidth;
          canvas.height = dimensions.height;//video.videoHeight;
          
          const context = canvas.getContext('2d',{ willReadFrequently: true });
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          spinner.classList.remove('loading');

          APP_GLOBALS.scanning = setInterval(() => {
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if ( code && code.data && code.data !== '' ) {

              outputField.innerText = code.data;
              APP_GLOBALS.clipboard = code.data;

              drawLine(context, code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
              drawLine(context, code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
              drawLine(context, code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
              drawLine(context, code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");

              if ( !code.data.includes('<script') ) {
                addBtnEl.classList.remove('hide');
                if ( code.data.startsWith('http') ) {
                  navBtnEl.href = code.data;
                  navBtnEl.classList.remove('hide');
                }
              }
            }

          }, 150);

        });

      } catch (error) {
        videoDisplay.innerHTML = 'Error accessing camera: ' + error ;
      }
    } else {
      videoDisplay.innerHTML = 'Camera not supported' ;
    }
  };

  APP_GLOBALS.cameraModal.show(modal);

  setTimeout(()=>{
    //Ensure modal ui has rendered before starting stream
    setVideoCam();
  },700);
}








/**
 * function renderDetailPageOverlay
 * Displays the printer friendly detail page (actually a hidden div) 
 * Then hides the other app sections
 */
function renderDetailPageOverlay(id){

    const data = APP_GLOBALS.linkList[id];

    const page = document.getElementById('page-link-details');
    const detailLink = page.querySelector('.detail-link');
    const detailName = page.querySelector('.detail-name');
    const detailHeadline = page.querySelector('.detail-headline');
    const detailImg = page.querySelector('.detail-img');
    // detail-close-button

    //hydrate data
    detailHeadline.innerText = data.title;
    detailImg.src = data.code;
    detailImg.alt = "qr code for sharing a link to " + data.title;

    if (isURL(data.link)) {
        detailLink.href = data.link;
        detailLink.innerText = data.description;
        detailName.innerText = '';
        //detailName.classList.add('d-none');
    } else {
        detailLink.removeAttribute('href');
        detailLink.innerText = data.link;
        detailName.innerText = '';
        //detailName.classList.remove('d-none');
    }

    showPage('linkDetail');
}

/**
 * function handleAddButton
 * Handles the link method add modal form submit
 * Then closes modal 
 */
function handleAddButton(){
    const modal = document.getElementById('formModal');

    const titleEl = document.getElementById('form-link-title');
    const linkEl = document.getElementById('form-link-link');
    const descEl = document.getElementById('form-link-description');
    const typeEl = document.getElementById('form-link-type');
    const idEl = document.getElementById('form-link-id');
    const closEl = modal.querySelector('.modal-close-button');
    const qrcdEl = document.getElementById('qrcode-hidden-container');
    const codeEl = document.createElement('div');

    const closecallback = ()=>{
        closEl.click();
    };

    if (titleEl.value == '' || linkEl.value == '') {
        alert('please fill the form');
        return;
    }

    qrcdEl.appendChild(codeEl);

    const qrcode = new QRCode(codeEl, {
        text: linkEl.value,
        width: 220,
        height: 220,
        colorDark : "#111111",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    window.setTimeout(()=>{
        
        let imgEl = codeEl.querySelector('img');

        const typeVal = (APP_GLOBALS.linkTypes[typeEl.value]) ? typeEl.value : 'uncategorized';

        addLink({
            'id' : idEl.value,
            'title' : titleEl.value,
            'description' : descEl.value,
            'link' : linkEl.value,
            'type' : typeVal,
            'code' : imgEl.src
        }, closecallback);

        codeEl.remove();
    },400);
}

/**
 * function addLink
 * Adds a new link to state and saves state to disc
 * @param itemToAdd {object}
 * @param callbackFunc {function}
 */
function addLink( itemToAdd, callbackFunc ){
    
    let listData = APP_GLOBALS.linkList;
    let lookupId = (itemToAdd.id && itemToAdd.id !== "") ? itemToAdd.id : getUUID();

    let model = {
        'id': lookupId,
        'title':itemToAdd.title, 
        'description':itemToAdd.description, 
        'type':itemToAdd.type, 
        'link':itemToAdd.link.replaceAll(' ', ''),
        'code':itemToAdd.code
    };

    listData[lookupId] = model;

    APP_GLOBALS.linkList = listData;

    renderLinkAccordions();
    updateSavedData();
    callbackFunc();
}

function addButtonIcon(elem, style){
    const elemIcon = document.createElement('SPAN');
    elemIcon.classList.add(style);
    elem.appendChild(elemIcon);
}

/**
 * function getListElement
 * displays the profile image if image exists in APP_GLOBALS
 */
function getListElement(listType){

    const container = document.createElement('DIV');

    const ulElement = document.createElement('UL');
    ulElement.className = 'list-group';

    listType.list.forEach((item)=>{

        const elemLabel = document.createElement('LABEL');
        elemLabel.className="list-group-item-label fs-4";
        elemLabel.innerText = item.title;

        const elemItem = document.createElement('LI');
        elemItem.className = "list-group-item p-3 d-flex justify-content-between cursor-pointer";
        elemItem.appendChild(elemLabel);

        const elemRemoveButton = document.createElement('BUTTON');
        elemRemoveButton.className = "btn align-self-center";
        elemRemoveButton.innerText = "";
        addButtonIcon(elemRemoveButton,'gg-trash');

        const elemEditButton = document.createElement('BUTTON');
        elemEditButton.className = "btn mx-3 align-self-center";
        elemEditButton.innerText = "";
        addButtonIcon(elemEditButton,'gg-pen');
        
        const elemControls = document.createElement('DIV');
        elemControls.className= "d-flex";
        
        if ( item.id.includes('readonly') ) {
            elemRemoveButton.disabled = 'disabled';
            elemEditButton.disabled = 'disabled';
        } else {
            elemRemoveButton.addEventListener('click',(event)=>{
                handleRemoveClick(event,item.id);
            });
            elemEditButton.addEventListener('click',(event)=>{
                handleEditClick(event,item.id);
            });
        }

        elemControls.appendChild(elemEditButton);
        elemControls.appendChild(elemRemoveButton);

        elemItem.appendChild(elemControls);

        elemItem.addEventListener('click',()=>{
            handleDetailClick(item.id);
        });

        ulElement.appendChild(elemItem);
    });

    container.appendChild(ulElement);

    return container;
}


/**
 * function renderProfileImage
 * displays the profile image if image exists in APP_GLOBALS
 */
function renderProfileImage() {
  
    const container = document.getElementById('profile-photo-container');

    if (APP_GLOBALS.userImage && APP_GLOBALS.userImage != '') {
        
        const imgEl = container.querySelector('.photo-img');
        
        imgEl.src = APP_GLOBALS.userImage;
        container.classList.add('has-image');
    }
}

/**
 * function renderProfileName
 * displays the profile name onscreen with current state
 */
function renderProfileName(){
    const fieldLabel = document.getElementById('user-name-label');
    fieldLabel.innerText = APP_GLOBALS.userName;
}




/**
 * function setupFileUploadModal
 * Setup events for the modal
 */
function setupFileUploadModal() {
    
    const modal = document.getElementById('formModalPhoto');
    const closEl = modal.querySelector('.modal-close-button');
    const uploadBtn = document.getElementById('filepickerbtn');

    uploadBtn.addEventListener('click',()=>{

        const file = document.querySelector('#filepicker').files[0];

        getBase64(file).then((data)=>{
            APP_GLOBALS.userImage = data;              
            updateSavedData();
            renderProfileImage();
            closEl.click();
        });
    })
}


/**
 * function setupImportModal
 * Setup events for the modal
 */
function setupImportModal() {
    
    const modal = document.getElementById('formModalImport');
    const closEl = modal.querySelector('.modal-close-button');
    const uploadBtn = document.getElementById('importfilepickerbtn');

    uploadBtn.addEventListener('click',()=>{

        const file = document.querySelector('#importfilepicker').files[0];

        getFileContents(file).then((data)=>{
            const importData = JSON.parse(data);

            if ( importData && importData.fileType && importData.fileType === 'jsonlinkybucketimport' ) {
                APP_GLOBALS.linkList = {
                    ...APP_GLOBALS.linkList,
                    ...importData.linkList
                };         
                updateSavedData();
                renderLinkAccordions();
                closEl.click();
            } else {
                alert('Erro : Incorrect file type.')
            }
        });
    })
}


/**
 * function setupUserNameModal
 * Setup events for the modal
 */
function setupUserNameModal(){
    
    const modal = document.getElementById('formUserNameModal');
    const field = document.getElementById('user-name-input');
    const closEl = modal.querySelector('.modal-close-button');
    const userNameForm = document.getElementById('user-name-form');

    field.value = APP_GLOBALS.userName;

    userNameForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        
        APP_GLOBALS.userName = field.value;
        renderProfileName();
        updateSavedData();
        closEl.click();
    });
}

/**
    * function setupDetailModal
    * Setup events for the modal
    */
function setupLinkDetailModal(){

    const page = document.getElementById('page-link-details');
    const detailLink = page.querySelector('.detail-link');
    const closeButton = page.querySelector('.detail-close-button');
    const detailShare = page.querySelector('.detail-share');
    const detailPrint = page.querySelector('.detail-print');

    closeButton.addEventListener('click',()=>{
        showPage('linkList');
    });

    detailPrint.addEventListener('click',()=>{
        window.print();
    });

    detailShare.addEventListener('click', async () => {

        let data = {
            text: detailLink.innerText //message body
        };

        if ( detailLink.href ) {
            data = {
                text: '', //message body
                title : detailLink.href, //link text
                url: detailLink.href //link href
            };
        }
      
        try {
          await navigator.share(data);
        }
        catch(e) {
          console.warn('share error', e);
        }
    });
}

/**
    * function getClipboardContent
    * returns clipboard content (text/uri-list or text/plain)
    */
async function getClipboardContent(){

    let items = await navigator.clipboard.read();

    let reg = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/
    let res = null;
    let uri = null;
    let txt = null;
    let extractLink = ''; 

    for (let item of items) {
        if (item.types.includes("text/uri-list")){
            res = await item.getType("text/uri-list");   
            uri = await res.text();
        }
        if (item.types.includes("text/plain")){
            res = await item.getType("text/plain");
            txt = await res.text();

            //for paragraph based clipboard content, we extract the first link
            if ( txt.includes(' ') ) {
                extractLink = txt.match(reg);
                txt = (extractLink) ? extractLink[0] : txt;
            }
        }
    }

    return uri || txt;
}


/**
    * function getHostName
    * returns hostname from domain name
    */
function getTitleFromUrl2(txt){

    if ( isURL(txt) ) {
        let domain = (new URL(txt));
        let hostname = domain.hostname;
        let hostparts = hostname.split('.');


        if ( hostparts.length > 1 ) {
            hostparts.pop();
        }

        txt = hostparts.reduce((a, b) => a.length <= b.length ? b : a);
    } else {
        txt = '';
    }

    return (txt && txt.length > 1) ? txt.replace(/^./, str => str.toUpperCase()) : txt;
}


function getTitleFromDomain(domain){

    //popular domains are titled here
    let title = domain;

    switch(domain) {
        case 'ts.la':
            title = 'Tesla';
            break;
        case 'cash.app':
            title = 'CashApp';
            break;
        case 'venmo.com':
            title = 'Venmo';
            break;
        case 'paypal.me':
            title = 'Paypal';
            break;
        default:
          // code block
      }
    
    return title;
}


function getTitleFromUrl(url){

    if ( isURL(url) ) {
        const urlParts = new URL(url).hostname.split('.');

        const domain = urlParts
            .slice(0)
            .slice(-(urlParts.length === 4 ? 3 : 2))
            .join('.');

        return getTitleFromDomain(domain);
    } else {
        return '';
    }
}


/**
    * function setupFormModal
    * Setup events for the modal
    */
function setupLinkRemoveConfirmModal(){

    APP_GLOBALS.removeConfirmModalInstance = new bootstrap.Modal(document.getElementById('removeConfirm'), {keyboard: false});
}


/**
    * function setupFormModal
    * Setup events for the modal
    */
function setupLinkAddFormModal(){

    APP_GLOBALS.formModalInstance = new bootstrap.Modal(document.getElementById('formModal'), {keyboard: false});

    const linkTypes = APP_GLOBALS.linkTypes;
    const typeField = document.getElementById('form-link-type');
    const linkField = document.getElementById('form-link-link');
    const descField = document.getElementById('form-link-description');
    const pasteBttn = document.getElementById('form-link-paste-button');
    const afillBttn = document.getElementById('form-autofill-button');
    const titleField = document.getElementById('form-link-title');

    function setAfillBttn(){
        if ( isURL(linkField.value) || linkField.value.length > 5 ) {
            afillBttn.disabled = false;
        } else {
            afillBttn.disabled = true;
        }
    }

    async function autofill(text){
        descField.value = text;
        titleField.value = getTitleFromUrl(text);
    }


    linkField.addEventListener('keyup', (event)=>{
        
        if (afillBttn) {
            setAfillBttn();
        }
    });

    pasteBttn.addEventListener('click', (event)=>{

        getClipboardContent().then((clipText)=>{
            linkField.value = clipText;
            autofill(clipText);
            setAfillBttn();
        });
    });

    afillBttn.addEventListener('click', (event)=>{

        autofill(linkField.value);
    });

    for (let key in linkTypes) {
        let option = document.createElement('OPTION');
        option.value = key;
        option.innerText = linkTypes[key].label;
        typeField.appendChild(option);
    }
}

/**
    * function renderFormModal
    * Render the modal
    * @param id {string}
    */
function renderFormModal(id,typeId){

    //set fields
    const typeEl = document.getElementById('form-link-type');
    const idEl = document.getElementById('form-link-id');
    const titleEl = document.getElementById('form-link-title');
    const linkEl = document.getElementById('form-link-link');
    const descEl = document.getElementById('form-link-description');
    const submit = document.getElementById('form-link-submit');
    const labelEl = document.getElementById('formModalLabel');
    const afillBttn = document.getElementById('form-autofill-button');

    
    if ( id ) {
        //patch mode
        const data = APP_GLOBALS.linkList[id];

        idEl.value = data.id;
        linkEl.value = data.link;
        titleEl.value = data.title;
        descEl.value = data.description;
        typeEl.value = data.type;
        
        submit.innerText = 'Edit';
        labelEl.innerText = 'Edit';
    } else {
        //post mode
        idEl.value = "";
        titleEl.value = "";
        descEl.value = "";
        linkEl.value = (APP_GLOBALS.clipboard && APP_GLOBALS.clipboard !== '') ? APP_GLOBALS.clipboard : "";

        if ( typeId ) {
            typeEl.value = typeId;
        } else {
            typeEl.selectedIndex = 0;
        }

        submit.innerText = 'Add';
        labelEl.innerText = 'Add';
    }


    if ( isURL(linkEl.value) || linkEl.value.length > 5 ) {
        afillBttn.disabled = false;
    } else {
        afillBttn.disabled = true;
    }

    //show
    const editFormModal = document.getElementById('formModal');
    APP_GLOBALS.formModalInstance.show(editFormModal);
}



/**
    * function renderRemoveConfirmModal
    * Render the modal and assign events
    * @param id {string}
    */
function renderRemoveConfirmModal(id){

    const modal = document.getElementById('removeConfirm');
    const titleEl = document.getElementById('removeConfirmTitle');
    const btnEl = document.getElementById('removeConfirmButton');
    const closEl = modal.querySelector('.modal-close-button');
    const item = APP_GLOBALS.linkList[id];

    titleEl.innerText = item.title;

    btnEl.addEventListener('click',()=>{
        delete APP_GLOBALS.linkList[id];
        renderLinkAccordions();
        updateSavedData();
        closEl.click();
    });

    //show
    APP_GLOBALS.removeConfirmModalInstance.show(modal);
}



/**
    * function setupFormDeleteAllModal
    * Setup events for the modal
    */
    function setupFormDeleteAllModal(){

    const modal = document.getElementById('formDeleteAllModal');
    const btnSubmit = document.getElementById('delete-all-data');
    const closEl = modal.querySelector('.modal-close-button');

    btnSubmit.addEventListener('click',(event)=>{
        event.preventDefault();
        deleteAllSavedData();
        closEl.click();
        lock();
    });
}

/**
    * function setupPWAModal
    * Setup PWA install instruction modal
    * hide app features
    */
function setupPWAModal(){
    APP_GLOBALS.pwaModal = new bootstrap.Modal(document.getElementById('pwaModal'), {keyboard: false});

    renderPWAModal();
}

/**
    * function renderPWAModal
    * Displays the PWA install modal
    */
function renderPWAModal(){

    if (iOSCanInstall && !iOSIsInstalled) {
        
        //hide sections
        showPage('none');

        //open modal
        const pwaModal = document.getElementById('pwaModal');
        APP_GLOBALS.pwaModal.show(pwaModal);
    }
}


/**
    * function setupAgreementModal
    * Setup agreement modal
    */
function setupAgreementModal(){
    APP_GLOBALS.agreementModalInstance = new bootstrap.Modal(document.getElementById('formModalAgreement'), {keyboard: false});

    const lock = document.getElementById('lock');

    lock.addEventListener('click',(event)=>{

        if (iOSCanInstall && !iOSIsInstalled) {
            renderPWAModal();
        } else {
            const agree = (APP_GLOBALS.agreement == 'yes') ? true : false;
            if( !agree ) {
                event.preventDefault();
                renderAgreementModal();
            }
        }
    })
}

/**
    * function renderAgreementModal
    * Render the modal
    */
function renderAgreementModal(){

    const agreementModal = document.getElementById('formModalAgreement');
    APP_GLOBALS.agreementModalInstance.show(agreementModal);

    const btnSubmit = document.getElementById('agreement-button');

    btnSubmit.addEventListener('click',(event)=>{
        event.preventDefault();
        setAgreementStatus('yes');
    });
}

/**
    * function lock
    * Render a lock layer
    */
function lock(){

    const lock = document.getElementById('lock');

    lock.style.display = ( APP_GLOBALS.agreement == 'yes' ) ? 'none' : 'block';
}

/**
    * function renderAddButton
    * Render an Add Button
    */
function renderAddButton(container,data){
    let button = document.createElement('BUTTON');
    button.className = 'btn btn-secondary w-100 fs-5 mt-2 ';
    button.innerText = 'Add to ' + data.label + ' +';

    button.addEventListener('click',()=>{
        renderFormModal(null,data.id);
    });

    container.appendChild(button);
}

/**
    * function renderLinkAccordions
    * Render an Accordion for links
    */
function renderLinkAccordions(){
    const linkTypes = APP_GLOBALS.linkTypes;
    const containerId = 'accordionLinkLists';
    const container = document.getElementById(containerId);

    container.replaceChildren();

    for (let key in linkTypes) {
        
        const itemId = `accordion-item-${key}`;
        const itemHeadlineId = `accordion-headline-${key}`;
        const itemBodyId = `accordion-body-${key}`;

        const accordionItem = document.createElement('DIV');
        accordionItem.className = 'accordion-item';

        const accordionItemHeader = document.createElement('H2');
        accordionItemHeader.className = 'accordion-header';
        accordionItemHeader.id = itemHeadlineId;

        const accordionItemHeaderButton = document.createElement('BUTTON');
        accordionItemHeaderButton.className = 'accordion-button collapsed fs-4';
        accordionItemHeaderButton.type = 'button';
        accordionItemHeaderButton.dataset.bsToggle = 'collapse';
        accordionItemHeaderButton.dataset.bsTarget = `#${itemId}`;
        accordionItemHeaderButton.setAttribute('aria-expanded','false');
        accordionItemHeaderButton.setAttribute('aria-controls',itemId);
        accordionItemHeaderButton.innerText = linkTypes[key].label;
        //accordionItemHeaderButton.style.backgroundColor = linkTypes[key].color;

        if (linkTypes[key].icon) {
            const iconContainer = document.createElement('span');
            iconContainer.className = 'accordion-icon';
            const icon = document.createElement('i');
            icon.className = linkTypes[key].icon;
            iconContainer.appendChild(icon);
            accordionItemHeaderButton.prepend(iconContainer);
        }

        const accordionItemDrawer = document.createElement('DIV');
        accordionItemDrawer.className = 'accordion-collapse collapse';
        accordionItemDrawer.id = itemId;
        accordionItemDrawer.setAttribute('aria-labelledby',itemHeadlineId);
        accordionItemDrawer.dataset.bsParent = `#${containerId}`;
        //accordionItemDrawer.style.backgroundColor = linkTypes[key].color;

        const accordionItemBody = document.createElement('DIV');
        accordionItemBody.className = 'accordion-body p-1';
        accordionItemBody.id = itemBodyId;

        const emptyMessage = document.createElement('P');
        emptyMessage.className = 'category-empty-message fs-6 m-3';
        emptyMessage.innerText = "Nothing to see here. Links are not yet added to this category.";
        
        accordionItemBody.appendChild(emptyMessage);
        accordionItemHeader.appendChild(accordionItemHeaderButton);
        accordionItemDrawer.appendChild(accordionItemBody);
        accordionItem.appendChild(accordionItemHeader);
        accordionItem.appendChild(accordionItemDrawer);

        renderAddButton(accordionItemBody, {
            id: key,
            label: linkTypes[key].label
        });

        container.appendChild(accordionItem);
    }

    renderLinkList();
}

/**
    * function renderLinkList
    * Renders links in each accordion drawer
    */
function renderLinkList(){

    let instructions = document.getElementById('instructions');
    
    //produce sorted link list
    let listTypes = {};
    let listCount = 0;
    
    //build listTypes
    for (let item of Object.values(APP_GLOBALS.linkList)) {
        const typeName = item.type || 'uncategorized';

        if ( !listTypes[typeName] ) {
            listTypes[typeName] = {
                'label' : APP_GLOBALS.linkTypes[typeName].label,
                'color' : APP_GLOBALS.linkTypes[typeName].color,
                'list' : []
            };
        }
        
        listTypes[typeName].list.push(item);
        listCount += 1;
    }

    //record in cache
    APP_GLOBALS.linkListByType = listTypes;

    if ( listCount === 0 ) {
        //display instructions
        instructions.classList.remove('d-none');
    } else {
        //hide instructions
        instructions.classList.add('d-none');

        //render each list (grouped by type)
        for (let key in listTypes) {

            const accordionBody = document.getElementById(`accordion-body-${key}`);

            if (accordionBody) {
                const emptyMessage = accordionBody.querySelector('.category-empty-message');
                emptyMessage.remove();
                
                const listElement = getListElement(listTypes[key]);
                accordionBody.prepend(listElement);

                const shareAllButton = getShareAllElement(key);
                accordionBody.appendChild(shareAllButton);
            }
        }
    }
}

function getShareAllElement(category){

    const element = document.createElement('BUTTON');
    
    element.innerText = 'Share all';
    element.className = 'btn btn-secondary w-100 fs-5 mt-2';

    element.addEventListener('click', ()=>{
        shareAllByType(category);
    })

    return element;
}

async function shareAllByType(category){
    
    const dataByType = APP_GLOBALS.linkListByType[category];

    const headline = dataByType.label;

    const list = dataByType.list;

    let output = '';

    const data = {
        text: '', //message body
        title : '', //link text
        url: '' //link href
    };
    
    if ( list.length === 1 ) {
        //share 1 link
        data.title = list[0].link;
        data.url = list[0].link;
    } else {
        //share multiple
        list.forEach((item)=>{
            output += '\n' + item.link;
        })
        data.text = output;
    }
  
    try {
        await navigator.share(data);
    }
    catch(e) {
        console.warn('share all error', e);
    }
}

function setTheme(){
    //set UI theme
    const mode = APP_GLOBALS.theme || 'light';
    document.documentElement.setAttribute('data-bs-theme', mode);
}

function setThemeControl(){

    //set Controls event
    const control = document.getElementById('dark-mode-toggle');

    //set Controls sate
    if ( APP_GLOBALS.theme === 'dark' ) {
        control.checked = 'checked';
    }

    //set Constols event
    control.addEventListener('click',(event)=>{
        if ( event.target.checked ) {
            APP_GLOBALS.theme = 'dark';
        } else {
            APP_GLOBALS.theme = 'light';
        }
        updateSavedData();
        setTheme();
    });
}


document.addEventListener("DOMContentLoaded", () => {
    setThemeControl();
});

//initialize
setAppGlobals();
setTheme();
setPages();
setupAgreementModal();

//render
renderLinkAccordions();
renderProfileName();
renderProfileImage();

//setup modals and events
setupCameraModal();
setupUserNameModal();
setupLinkDetailModal();
setupLinkAddFormModal();
setupLinkRemoveConfirmModal();
setupFileUploadModal();
setupFormDeleteAllModal();
setupPWAModal();
setupExportButton();
setupImportModal();

//lock UX before agreement
lock();
