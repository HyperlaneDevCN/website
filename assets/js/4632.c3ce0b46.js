"use strict";(self.webpackChunkhyperlane_dev_cn_website=self.webpackChunkhyperlane_dev_cn_website||[]).push([[4632],{14632:(t,e,i)=>{i.d(e,{diagram:()=>v});var a=i(10009),n=i(20007),s=function(){var t=(0,a.K2)((function(t,e,i,a){for(i=i||{},a=t.length;a--;i[t[a]]=e);return i}),"o"),e=[1,3],i=[1,4],n=[1,5],s=[1,6],r=[1,7],o=[1,4,5,10,12,13,14,18,25,35,37,39,41,42,48,50,51,52,53,54,55,56,57,60,61,63,64,65,66,67],l=[1,4,5,10,12,13,14,18,25,28,35,37,39,41,42,48,50,51,52,53,54,55,56,57,60,61,63,64,65,66,67],h=[55,56,57],c=[2,36],d=[1,37],u=[1,36],x=[1,38],g=[1,35],f=[1,43],p=[1,41],y=[1,14],T=[1,23],m=[1,18],q=[1,19],_=[1,20],A=[1,21],b=[1,22],S=[1,24],k=[1,25],F=[1,26],P=[1,27],C=[1,28],L=[1,29],v=[1,32],I=[1,33],E=[1,34],D=[1,39],z=[1,40],w=[1,42],K=[1,44],U=[1,62],N=[1,61],R=[4,5,8,10,12,13,14,18,44,47,49,55,56,57,63,64,65,66,67],B=[1,65],W=[1,66],$=[1,67],Q=[1,68],O=[1,69],X=[1,70],H=[1,71],M=[1,72],Y=[1,73],j=[1,74],G=[1,75],V=[1,76],Z=[4,5,6,7,8,9,10,11,12,13,14,15,18],J=[1,90],tt=[1,91],et=[1,92],it=[1,99],at=[1,93],nt=[1,96],st=[1,94],rt=[1,95],ot=[1,97],lt=[1,98],ht=[1,102],ct=[10,55,56,57],dt=[4,5,6,8,10,11,13,17,18,19,20,55,56,57],ut={trace:(0,a.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,idStringToken:3,ALPHA:4,NUM:5,NODE_STRING:6,DOWN:7,MINUS:8,DEFAULT:9,COMMA:10,COLON:11,AMP:12,BRKT:13,MULT:14,UNICODE_TEXT:15,styleComponent:16,UNIT:17,SPACE:18,STYLE:19,PCT:20,idString:21,style:22,stylesOpt:23,classDefStatement:24,CLASSDEF:25,start:26,eol:27,QUADRANT:28,document:29,line:30,statement:31,axisDetails:32,quadrantDetails:33,points:34,title:35,title_value:36,acc_title:37,acc_title_value:38,acc_descr:39,acc_descr_value:40,acc_descr_multiline_value:41,section:42,text:43,point_start:44,point_x:45,point_y:46,class_name:47,"X-AXIS":48,"AXIS-TEXT-DELIMITER":49,"Y-AXIS":50,QUADRANT_1:51,QUADRANT_2:52,QUADRANT_3:53,QUADRANT_4:54,NEWLINE:55,SEMI:56,EOF:57,alphaNumToken:58,textNoTagsToken:59,STR:60,MD_STR:61,alphaNum:62,PUNCTUATION:63,PLUS:64,EQUALS:65,DOT:66,UNDERSCORE:67,$accept:0,$end:1},terminals_:{2:"error",4:"ALPHA",5:"NUM",6:"NODE_STRING",7:"DOWN",8:"MINUS",9:"DEFAULT",10:"COMMA",11:"COLON",12:"AMP",13:"BRKT",14:"MULT",15:"UNICODE_TEXT",17:"UNIT",18:"SPACE",19:"STYLE",20:"PCT",25:"CLASSDEF",28:"QUADRANT",35:"title",36:"title_value",37:"acc_title",38:"acc_title_value",39:"acc_descr",40:"acc_descr_value",41:"acc_descr_multiline_value",42:"section",44:"point_start",45:"point_x",46:"point_y",47:"class_name",48:"X-AXIS",49:"AXIS-TEXT-DELIMITER",50:"Y-AXIS",51:"QUADRANT_1",52:"QUADRANT_2",53:"QUADRANT_3",54:"QUADRANT_4",55:"NEWLINE",56:"SEMI",57:"EOF",60:"STR",61:"MD_STR",63:"PUNCTUATION",64:"PLUS",65:"EQUALS",66:"DOT",67:"UNDERSCORE"},productions_:[0,[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[21,1],[21,2],[22,1],[22,2],[23,1],[23,3],[24,5],[26,2],[26,2],[26,2],[29,0],[29,2],[30,2],[31,0],[31,1],[31,2],[31,1],[31,1],[31,1],[31,2],[31,2],[31,2],[31,1],[31,1],[34,4],[34,5],[34,5],[34,6],[32,4],[32,3],[32,2],[32,4],[32,3],[32,2],[33,2],[33,2],[33,2],[33,2],[27,1],[27,1],[27,1],[43,1],[43,2],[43,1],[43,1],[62,1],[62,2],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[59,1],[59,1],[59,1]],performAction:(0,a.K2)((function(t,e,i,a,n,s,r){var o=s.length-1;switch(n){case 23:case 68:this.$=s[o];break;case 24:case 69:this.$=s[o-1]+""+s[o];break;case 26:this.$=s[o-1]+s[o];break;case 27:this.$=[s[o].trim()];break;case 28:s[o-2].push(s[o].trim()),this.$=s[o-2];break;case 29:this.$=s[o-4],a.addClass(s[o-2],s[o]);break;case 37:this.$=[];break;case 42:this.$=s[o].trim(),a.setDiagramTitle(this.$);break;case 43:this.$=s[o].trim(),a.setAccTitle(this.$);break;case 44:case 45:this.$=s[o].trim(),a.setAccDescription(this.$);break;case 46:a.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 47:a.addPoint(s[o-3],"",s[o-1],s[o],[]);break;case 48:a.addPoint(s[o-4],s[o-3],s[o-1],s[o],[]);break;case 49:a.addPoint(s[o-4],"",s[o-2],s[o-1],s[o]);break;case 50:a.addPoint(s[o-5],s[o-4],s[o-2],s[o-1],s[o]);break;case 51:a.setXAxisLeftText(s[o-2]),a.setXAxisRightText(s[o]);break;case 52:s[o-1].text+=" \u27f6 ",a.setXAxisLeftText(s[o-1]);break;case 53:a.setXAxisLeftText(s[o]);break;case 54:a.setYAxisBottomText(s[o-2]),a.setYAxisTopText(s[o]);break;case 55:s[o-1].text+=" \u27f6 ",a.setYAxisBottomText(s[o-1]);break;case 56:a.setYAxisBottomText(s[o]);break;case 57:a.setQuadrant1Text(s[o]);break;case 58:a.setQuadrant2Text(s[o]);break;case 59:a.setQuadrant3Text(s[o]);break;case 60:a.setQuadrant4Text(s[o]);break;case 64:case 66:this.$={text:s[o],type:"text"};break;case 65:this.$={text:s[o-1].text+""+s[o],type:s[o-1].type};break;case 67:this.$={text:s[o],type:"markdown"}}}),"anonymous"),table:[{18:e,26:1,27:2,28:i,55:n,56:s,57:r},{1:[3]},{18:e,26:8,27:2,28:i,55:n,56:s,57:r},{18:e,26:9,27:2,28:i,55:n,56:s,57:r},t(o,[2,33],{29:10}),t(l,[2,61]),t(l,[2,62]),t(l,[2,63]),{1:[2,30]},{1:[2,31]},t(h,c,{30:11,31:12,24:13,32:15,33:16,34:17,43:30,58:31,1:[2,32],4:d,5:u,10:x,12:g,13:f,14:p,18:y,25:T,35:m,37:q,39:_,41:A,42:b,48:S,50:k,51:F,52:P,53:C,54:L,60:v,61:I,63:E,64:D,65:z,66:w,67:K}),t(o,[2,34]),{27:45,55:n,56:s,57:r},t(h,[2,37]),t(h,c,{24:13,32:15,33:16,34:17,43:30,58:31,31:46,4:d,5:u,10:x,12:g,13:f,14:p,18:y,25:T,35:m,37:q,39:_,41:A,42:b,48:S,50:k,51:F,52:P,53:C,54:L,60:v,61:I,63:E,64:D,65:z,66:w,67:K}),t(h,[2,39]),t(h,[2,40]),t(h,[2,41]),{36:[1,47]},{38:[1,48]},{40:[1,49]},t(h,[2,45]),t(h,[2,46]),{18:[1,50]},{4:d,5:u,10:x,12:g,13:f,14:p,43:51,58:31,60:v,61:I,63:E,64:D,65:z,66:w,67:K},{4:d,5:u,10:x,12:g,13:f,14:p,43:52,58:31,60:v,61:I,63:E,64:D,65:z,66:w,67:K},{4:d,5:u,10:x,12:g,13:f,14:p,43:53,58:31,60:v,61:I,63:E,64:D,65:z,66:w,67:K},{4:d,5:u,10:x,12:g,13:f,14:p,43:54,58:31,60:v,61:I,63:E,64:D,65:z,66:w,67:K},{4:d,5:u,10:x,12:g,13:f,14:p,43:55,58:31,60:v,61:I,63:E,64:D,65:z,66:w,67:K},{4:d,5:u,10:x,12:g,13:f,14:p,43:56,58:31,60:v,61:I,63:E,64:D,65:z,66:w,67:K},{4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,44:[1,57],47:[1,58],58:60,59:59,63:E,64:D,65:z,66:w,67:K},t(R,[2,64]),t(R,[2,66]),t(R,[2,67]),t(R,[2,70]),t(R,[2,71]),t(R,[2,72]),t(R,[2,73]),t(R,[2,74]),t(R,[2,75]),t(R,[2,76]),t(R,[2,77]),t(R,[2,78]),t(R,[2,79]),t(R,[2,80]),t(o,[2,35]),t(h,[2,38]),t(h,[2,42]),t(h,[2,43]),t(h,[2,44]),{3:64,4:B,5:W,6:$,7:Q,8:O,9:X,10:H,11:M,12:Y,13:j,14:G,15:V,21:63},t(h,[2,53],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,49:[1,77],63:E,64:D,65:z,66:w,67:K}),t(h,[2,56],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,49:[1,78],63:E,64:D,65:z,66:w,67:K}),t(h,[2,57],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,63:E,64:D,65:z,66:w,67:K}),t(h,[2,58],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,63:E,64:D,65:z,66:w,67:K}),t(h,[2,59],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,63:E,64:D,65:z,66:w,67:K}),t(h,[2,60],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,63:E,64:D,65:z,66:w,67:K}),{45:[1,79]},{44:[1,80]},t(R,[2,65]),t(R,[2,81]),t(R,[2,82]),t(R,[2,83]),{3:82,4:B,5:W,6:$,7:Q,8:O,9:X,10:H,11:M,12:Y,13:j,14:G,15:V,18:[1,81]},t(Z,[2,23]),t(Z,[2,1]),t(Z,[2,2]),t(Z,[2,3]),t(Z,[2,4]),t(Z,[2,5]),t(Z,[2,6]),t(Z,[2,7]),t(Z,[2,8]),t(Z,[2,9]),t(Z,[2,10]),t(Z,[2,11]),t(Z,[2,12]),t(h,[2,52],{58:31,43:83,4:d,5:u,10:x,12:g,13:f,14:p,60:v,61:I,63:E,64:D,65:z,66:w,67:K}),t(h,[2,55],{58:31,43:84,4:d,5:u,10:x,12:g,13:f,14:p,60:v,61:I,63:E,64:D,65:z,66:w,67:K}),{46:[1,85]},{45:[1,86]},{4:J,5:tt,6:et,8:it,11:at,13:nt,16:89,17:st,18:rt,19:ot,20:lt,22:88,23:87},t(Z,[2,24]),t(h,[2,51],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,63:E,64:D,65:z,66:w,67:K}),t(h,[2,54],{59:59,58:60,4:d,5:u,8:U,10:x,12:g,13:f,14:p,18:N,63:E,64:D,65:z,66:w,67:K}),t(h,[2,47],{22:88,16:89,23:100,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt}),{46:[1,101]},t(h,[2,29],{10:ht}),t(ct,[2,27],{16:103,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt}),t(dt,[2,25]),t(dt,[2,13]),t(dt,[2,14]),t(dt,[2,15]),t(dt,[2,16]),t(dt,[2,17]),t(dt,[2,18]),t(dt,[2,19]),t(dt,[2,20]),t(dt,[2,21]),t(dt,[2,22]),t(h,[2,49],{10:ht}),t(h,[2,48],{22:88,16:89,23:104,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt}),{4:J,5:tt,6:et,8:it,11:at,13:nt,16:89,17:st,18:rt,19:ot,20:lt,22:105},t(dt,[2,26]),t(h,[2,50],{10:ht}),t(ct,[2,28],{16:103,4:J,5:tt,6:et,8:it,11:at,13:nt,17:st,18:rt,19:ot,20:lt})],defaultActions:{8:[2,30],9:[2,31]},parseError:(0,a.K2)((function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)}),"parseError"),parse:(0,a.K2)((function(t){var e=this,i=[0],n=[],s=[null],r=[],o=this.table,l="",h=0,c=0,d=0,u=r.slice.call(arguments,1),x=Object.create(this.lexer),g={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(g.yy[f]=this.yy[f]);x.setInput(t,g.yy),g.yy.lexer=x,g.yy.parser=this,void 0===x.yylloc&&(x.yylloc={});var p=x.yylloc;r.push(p);var y=x.options&&x.options.ranges;function T(){var t;return"number"!=typeof(t=n.pop()||x.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof g.yy.parseError?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,a.K2)((function(t){i.length=i.length-2*t,s.length=s.length-t,r.length=r.length-t}),"popStack"),(0,a.K2)(T,"lex");for(var m,q,_,A,b,S,k,F,P,C={};;){if(_=i[i.length-1],this.defaultActions[_]?A=this.defaultActions[_]:(null==m&&(m=T()),A=o[_]&&o[_][m]),void 0===A||!A.length||!A[0]){var L="";for(S in P=[],o[_])this.terminals_[S]&&S>2&&P.push("'"+this.terminals_[S]+"'");L=x.showPosition?"Parse error on line "+(h+1)+":\n"+x.showPosition()+"\nExpecting "+P.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(L,{text:x.match,token:this.terminals_[m]||m,line:x.yylineno,loc:p,expected:P})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+m);switch(A[0]){case 1:i.push(m),s.push(x.yytext),r.push(x.yylloc),i.push(A[1]),m=null,q?(m=q,q=null):(c=x.yyleng,l=x.yytext,h=x.yylineno,p=x.yylloc,d>0&&d--);break;case 2:if(k=this.productions_[A[1]][1],C.$=s[s.length-k],C._$={first_line:r[r.length-(k||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(k||1)].first_column,last_column:r[r.length-1].last_column},y&&(C._$.range=[r[r.length-(k||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply(C,[l,c,h,g.yy,A[1],s,r].concat(u))))return b;k&&(i=i.slice(0,-1*k*2),s=s.slice(0,-1*k),r=r.slice(0,-1*k)),i.push(this.productions_[A[1]][0]),s.push(C.$),r.push(C._$),F=o[i[i.length-2]][i[i.length-1]],i.push(F);break;case 3:return!0}}return!0}),"parse")},xt=function(){return{EOF:1,parseError:(0,a.K2)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,a.K2)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,a.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,a.K2)((function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===a.length?this.yylloc.first_column:0)+a[a.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,a.K2)((function(){return this._more=!0,this}),"more"),reject:(0,a.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,a.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,a.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,a.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,a.K2)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,a.K2)((function(t,e){var i,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in n)this[s]=n[s];return!1}return!1}),"test_match"),next:(0,a.K2)((function(){if(this.done)return this.EOF;var t,e,i,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,a=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,a.K2)((function(){var t=this.next();return t||this.lex()}),"lex"),begin:(0,a.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,a.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,a.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,a.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,a.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,a.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,a.K2)((function(t,e,i,a){switch(i){case 0:case 1:case 3:break;case 2:return 55;case 4:return this.begin("title"),35;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),37;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),39;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 23:case 25:case 31:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 48;case 14:return 50;case 15:return 49;case 16:return 51;case 17:return 52;case 18:return 53;case 19:return 54;case 20:return 25;case 21:this.begin("md_string");break;case 22:return"MD_STR";case 24:this.begin("string");break;case 26:return"STR";case 27:this.begin("class_name");break;case 28:return this.popState(),47;case 29:return this.begin("point_start"),44;case 30:return this.begin("point_x"),45;case 32:this.popState(),this.begin("point_y");break;case 33:return this.popState(),46;case 34:return 28;case 35:return 4;case 36:return 11;case 37:return 64;case 38:return 10;case 39:case 40:return 65;case 41:return 14;case 42:return 13;case 43:return 67;case 44:return 66;case 45:return 12;case 46:return 8;case 47:return 5;case 48:return 18;case 49:return 56;case 50:return 63;case 51:return 57}}),"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:classDef\b)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?::::)/i,/^(?:^\w+)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{class_name:{rules:[28],inclusive:!1},point_y:{rules:[33],inclusive:!1},point_x:{rules:[32],inclusive:!1},point_start:{rules:[30,31],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[22,23],inclusive:!1},string:{rules:[25,26],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,21,24,27,29,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],inclusive:!0}}}}();function gt(){this.yy={}}return ut.lexer=xt,(0,a.K2)(gt,"Parser"),gt.prototype=ut,ut.Parser=gt,new gt}();s.parser=s;var r=s,o=(0,a.P$)(),l=class{constructor(){this.classes=new Map,this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}static{(0,a.K2)(this,"QuadrantBuilder")}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:a.UI.quadrantChart?.chartWidth||500,chartWidth:a.UI.quadrantChart?.chartHeight||500,titlePadding:a.UI.quadrantChart?.titlePadding||10,titleFontSize:a.UI.quadrantChart?.titleFontSize||20,quadrantPadding:a.UI.quadrantChart?.quadrantPadding||5,xAxisLabelPadding:a.UI.quadrantChart?.xAxisLabelPadding||5,yAxisLabelPadding:a.UI.quadrantChart?.yAxisLabelPadding||5,xAxisLabelFontSize:a.UI.quadrantChart?.xAxisLabelFontSize||16,yAxisLabelFontSize:a.UI.quadrantChart?.yAxisLabelFontSize||16,quadrantLabelFontSize:a.UI.quadrantChart?.quadrantLabelFontSize||16,quadrantTextTopPadding:a.UI.quadrantChart?.quadrantTextTopPadding||5,pointTextPadding:a.UI.quadrantChart?.pointTextPadding||5,pointLabelFontSize:a.UI.quadrantChart?.pointLabelFontSize||12,pointRadius:a.UI.quadrantChart?.pointRadius||5,xAxisPosition:a.UI.quadrantChart?.xAxisPosition||"top",yAxisPosition:a.UI.quadrantChart?.yAxisPosition||"left",quadrantInternalBorderStrokeWidth:a.UI.quadrantChart?.quadrantInternalBorderStrokeWidth||1,quadrantExternalBorderStrokeWidth:a.UI.quadrantChart?.quadrantExternalBorderStrokeWidth||2}}getDefaultThemeConfig(){return{quadrant1Fill:o.quadrant1Fill,quadrant2Fill:o.quadrant2Fill,quadrant3Fill:o.quadrant3Fill,quadrant4Fill:o.quadrant4Fill,quadrant1TextFill:o.quadrant1TextFill,quadrant2TextFill:o.quadrant2TextFill,quadrant3TextFill:o.quadrant3TextFill,quadrant4TextFill:o.quadrant4TextFill,quadrantPointFill:o.quadrantPointFill,quadrantPointTextFill:o.quadrantPointTextFill,quadrantXAxisTextFill:o.quadrantXAxisTextFill,quadrantYAxisTextFill:o.quadrantYAxisTextFill,quadrantTitleFill:o.quadrantTitleFill,quadrantInternalBorderStrokeFill:o.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:o.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),this.classes=new Map,a.Rm.info("clear called")}setData(t){this.data={...this.data,...t}}addPoints(t){this.data.points=[...t,...this.data.points]}addClass(t,e){this.classes.set(t,e)}setConfig(t){a.Rm.trace("setConfig called with: ",t),this.config={...this.config,...t}}setThemeConfig(t){a.Rm.trace("setThemeConfig called with: ",t),this.themeConfig={...this.themeConfig,...t}}calculateSpace(t,e,i,a){const n=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,s={top:"top"===t&&e?n:0,bottom:"bottom"===t&&e?n:0},r=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,o={left:"left"===this.config.yAxisPosition&&i?r:0,right:"right"===this.config.yAxisPosition&&i?r:0},l=this.config.titleFontSize+2*this.config.titlePadding,h={top:a?l:0},c=this.config.quadrantPadding+o.left,d=this.config.quadrantPadding+s.top+h.top,u=this.config.chartWidth-2*this.config.quadrantPadding-o.left-o.right,x=this.config.chartHeight-2*this.config.quadrantPadding-s.top-s.bottom-h.top;return{xAxisSpace:s,yAxisSpace:o,titleSpace:h,quadrantSpace:{quadrantLeft:c,quadrantTop:d,quadrantWidth:u,quadrantHalfWidth:u/2,quadrantHeight:x,quadrantHalfHeight:x/2}}}getAxisLabels(t,e,i,a){const{quadrantSpace:n,titleSpace:s}=a,{quadrantHalfHeight:r,quadrantHeight:o,quadrantLeft:l,quadrantHalfWidth:h,quadrantTop:c,quadrantWidth:d}=n,u=Boolean(this.data.xAxisRightText),x=Boolean(this.data.yAxisTopText),g=[];return this.data.xAxisLeftText&&e&&g.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+s.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&e&&g.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+h+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+s.top:this.config.xAxisLabelPadding+c+o+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&i&&g.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+d+this.config.quadrantPadding,y:c+o-(x?r/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&i&&g.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+d+this.config.quadrantPadding,y:c+r-(x?r/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),g}getQuadrants(t){const{quadrantSpace:e}=t,{quadrantHalfHeight:i,quadrantLeft:a,quadrantHalfWidth:n,quadrantTop:s}=e,r=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:s,width:n,height:i,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:s,width:n,height:i,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:s+i,width:n,height:i,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:s+i,width:n,height:i,fill:this.themeConfig.quadrant4Fill}];for(const o of r)o.text.x=o.x+o.width/2,0===this.data.points.length?(o.text.y=o.y+o.height/2,o.text.horizontalPos="middle"):(o.text.y=o.y+this.config.quadrantTextTopPadding,o.text.horizontalPos="top");return r}getQuadrantPoints(t){const{quadrantSpace:e}=t,{quadrantHeight:i,quadrantLeft:a,quadrantTop:s,quadrantWidth:r}=e,o=(0,n.m4Y)().domain([0,1]).range([a,r+a]),l=(0,n.m4Y)().domain([0,1]).range([i+s,s]);return this.data.points.map((t=>{const e=this.classes.get(t.className);e&&(t={...e,...t});return{x:o(t.x),y:l(t.y),fill:t.color??this.themeConfig.quadrantPointFill,radius:t.radius??this.config.pointRadius,text:{text:t.text,fill:this.themeConfig.quadrantPointTextFill,x:o(t.x),y:l(t.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0},strokeColor:t.strokeColor??this.themeConfig.quadrantPointFill,strokeWidth:t.strokeWidth??"0px"}}))}getBorders(t){const e=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:i}=t,{quadrantHalfHeight:a,quadrantHeight:n,quadrantLeft:s,quadrantHalfWidth:r,quadrantTop:o,quadrantWidth:l}=i;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s-e,y1:o,x2:s+l+e,y2:o},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s+l,y1:o+e,x2:s+l,y2:o+n-e},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s-e,y1:o+n,x2:s+l+e,y2:o+n},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:s,y1:o+e,x2:s,y2:o+n-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:s+r,y1:o+e,x2:s+r,y2:o+n-e},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:s+e,y1:o+a,x2:s+l-e,y2:o+a}]}getTitle(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const t=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),e=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),i=this.config.showTitle&&!!this.data.titleText,a=this.data.points.length>0?"bottom":this.config.xAxisPosition,n=this.calculateSpace(a,t,e,i);return{points:this.getQuadrantPoints(n),quadrants:this.getQuadrants(n),axisLabels:this.getAxisLabels(a,t,e,n),borderLines:this.getBorders(n),title:this.getTitle(i)}}},h=class extends Error{static{(0,a.K2)(this,"InvalidStyleError")}constructor(t,e,i){super(`value for ${t} ${e} is invalid, please use a valid ${i}`),this.name="InvalidStyleError"}};function c(t){return!/^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(t)}function d(t){return!/^\d+$/.test(t)}function u(t){return!/^\d+px$/.test(t)}(0,a.K2)(c,"validateHexCode"),(0,a.K2)(d,"validateNumber"),(0,a.K2)(u,"validateSizeInPixels");var x=(0,a.D7)();function g(t){return(0,a.jZ)(t.trim(),x)}(0,a.K2)(g,"textSanitizer");var f=new l;function p(t){f.setData({quadrant1Text:g(t.text)})}function y(t){f.setData({quadrant2Text:g(t.text)})}function T(t){f.setData({quadrant3Text:g(t.text)})}function m(t){f.setData({quadrant4Text:g(t.text)})}function q(t){f.setData({xAxisLeftText:g(t.text)})}function _(t){f.setData({xAxisRightText:g(t.text)})}function A(t){f.setData({yAxisTopText:g(t.text)})}function b(t){f.setData({yAxisBottomText:g(t.text)})}function S(t){const e={};for(const i of t){const[t,a]=i.trim().split(/\s*:\s*/);if("radius"===t){if(d(a))throw new h(t,a,"number");e.radius=parseInt(a)}else if("color"===t){if(c(a))throw new h(t,a,"hex code");e.color=a}else if("stroke-color"===t){if(c(a))throw new h(t,a,"hex code");e.strokeColor=a}else{if("stroke-width"!==t)throw new Error(`style named ${t} is not supported.`);if(u(a))throw new h(t,a,"number of pixels (eg. 10px)");e.strokeWidth=a}}return e}function k(t,e,i,a,n){const s=S(n);f.addPoints([{x:i,y:a,text:g(t.text),className:e,...s}])}function F(t,e){f.addClass(t,S(e))}function P(t){f.setConfig({chartWidth:t})}function C(t){f.setConfig({chartHeight:t})}function L(){const t=(0,a.D7)(),{themeVariables:e,quadrantChart:i}=t;return i&&f.setConfig(i),f.setThemeConfig({quadrant1Fill:e.quadrant1Fill,quadrant2Fill:e.quadrant2Fill,quadrant3Fill:e.quadrant3Fill,quadrant4Fill:e.quadrant4Fill,quadrant1TextFill:e.quadrant1TextFill,quadrant2TextFill:e.quadrant2TextFill,quadrant3TextFill:e.quadrant3TextFill,quadrant4TextFill:e.quadrant4TextFill,quadrantPointFill:e.quadrantPointFill,quadrantPointTextFill:e.quadrantPointTextFill,quadrantXAxisTextFill:e.quadrantXAxisTextFill,quadrantYAxisTextFill:e.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:e.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:e.quadrantInternalBorderStrokeFill,quadrantTitleFill:e.quadrantTitleFill}),f.setData({titleText:(0,a.ab)()}),f.build()}(0,a.K2)(p,"setQuadrant1Text"),(0,a.K2)(y,"setQuadrant2Text"),(0,a.K2)(T,"setQuadrant3Text"),(0,a.K2)(m,"setQuadrant4Text"),(0,a.K2)(q,"setXAxisLeftText"),(0,a.K2)(_,"setXAxisRightText"),(0,a.K2)(A,"setYAxisTopText"),(0,a.K2)(b,"setYAxisBottomText"),(0,a.K2)(S,"parseStyles"),(0,a.K2)(k,"addPoint"),(0,a.K2)(F,"addClass"),(0,a.K2)(P,"setWidth"),(0,a.K2)(C,"setHeight"),(0,a.K2)(L,"getQuadrantData");var v={parser:r,db:{setWidth:P,setHeight:C,setQuadrant1Text:p,setQuadrant2Text:y,setQuadrant3Text:T,setQuadrant4Text:m,setXAxisLeftText:q,setXAxisRightText:_,setYAxisTopText:A,setYAxisBottomText:b,parseStyles:S,addPoint:k,addClass:F,getQuadrantData:L,clear:(0,a.K2)((function(){f.clear(),(0,a.IU)()}),"clear"),setAccTitle:a.SV,getAccTitle:a.iN,setDiagramTitle:a.ke,getDiagramTitle:a.ab,getAccDescription:a.m7,setAccDescription:a.EI},renderer:{draw:(0,a.K2)(((t,e,i,s)=>{function r(t){return"top"===t?"hanging":"middle"}function o(t){return"left"===t?"start":"middle"}function l(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}(0,a.K2)(r,"getDominantBaseLine"),(0,a.K2)(o,"getTextAnchor"),(0,a.K2)(l,"getTransformation");const h=(0,a.D7)();a.Rm.debug("Rendering quadrant chart\n"+t);const c=h.securityLevel;let d;"sandbox"===c&&(d=(0,n.Ltv)("#i"+e));const u=("sandbox"===c?(0,n.Ltv)(d.nodes()[0].contentDocument.body):(0,n.Ltv)("body")).select(`[id="${e}"]`),x=u.append("g").attr("class","main"),g=h.quadrantChart?.chartWidth??500,f=h.quadrantChart?.chartHeight??500;(0,a.a$)(u,f,g,h.quadrantChart?.useMaxWidth??!0),u.attr("viewBox","0 0 "+g+" "+f),s.db.setHeight(f),s.db.setWidth(g);const p=s.db.getQuadrantData(),y=x.append("g").attr("class","quadrants"),T=x.append("g").attr("class","border"),m=x.append("g").attr("class","data-points"),q=x.append("g").attr("class","labels"),_=x.append("g").attr("class","title");p.title&&_.append("text").attr("x",0).attr("y",0).attr("fill",p.title.fill).attr("font-size",p.title.fontSize).attr("dominant-baseline",r(p.title.horizontalPos)).attr("text-anchor",o(p.title.verticalPos)).attr("transform",l(p.title)).text(p.title.text),p.borderLines&&T.selectAll("line").data(p.borderLines).enter().append("line").attr("x1",(t=>t.x1)).attr("y1",(t=>t.y1)).attr("x2",(t=>t.x2)).attr("y2",(t=>t.y2)).style("stroke",(t=>t.strokeFill)).style("stroke-width",(t=>t.strokeWidth));const A=y.selectAll("g.quadrant").data(p.quadrants).enter().append("g").attr("class","quadrant");A.append("rect").attr("x",(t=>t.x)).attr("y",(t=>t.y)).attr("width",(t=>t.width)).attr("height",(t=>t.height)).attr("fill",(t=>t.fill)),A.append("text").attr("x",0).attr("y",0).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>r(t.text.horizontalPos))).attr("text-anchor",(t=>o(t.text.verticalPos))).attr("transform",(t=>l(t.text))).text((t=>t.text.text));q.selectAll("g.label").data(p.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text((t=>t.text)).attr("fill",(t=>t.fill)).attr("font-size",(t=>t.fontSize)).attr("dominant-baseline",(t=>r(t.horizontalPos))).attr("text-anchor",(t=>o(t.verticalPos))).attr("transform",(t=>l(t)));const b=m.selectAll("g.data-point").data(p.points).enter().append("g").attr("class","data-point");b.append("circle").attr("cx",(t=>t.x)).attr("cy",(t=>t.y)).attr("r",(t=>t.radius)).attr("fill",(t=>t.fill)).attr("stroke",(t=>t.strokeColor)).attr("stroke-width",(t=>t.strokeWidth)),b.append("text").attr("x",0).attr("y",0).text((t=>t.text.text)).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>r(t.text.horizontalPos))).attr("text-anchor",(t=>o(t.text.verticalPos))).attr("transform",(t=>l(t.text)))}),"draw")},styles:(0,a.K2)((()=>""),"styles")}}}]);