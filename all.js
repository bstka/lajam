eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g j=N.2U,1c=m.1c,O=m.O,P=m.P,k=m.k,Q=m.Q,K=m.K,1B=N.25,1C=N.26||N.2V,1D=1E.2W||7(){q(b 1E).27()};7 28(){g t=1c/29,i=[["#2X","#2Y"],["#2Z","#31"],["#32","#33"],["#34","#35"]];7 e(t,i){6.x=t,6.y=i,6.2a=7(){q O(6.1o())},6.1o=7(){q 6.x*6.x+6.y*6.y},6.1d=7(t){6.x+=t.x,6.y+=t.y},6.1e=7(t){6.x-=t.x,6.y-=t.y},6.2b=7(t){6.x/=t,6.y/=t},6.W=7(t){6.x*=t,6.y*=t},6.1F=7(){g t=6.1o();1G(0!=t){g i=1/O(t);6.x*=i,6.y*=i}},6.2c=7(){g t=6.1o();1G(0!=t){g i=1/O(t);q b e(6.x*i,6.y*i)}q b e(0,0)}}7 s(t,i,s,n){6.9=b e(t,i),6.1H=s,6.2e=n,6.1f=b e(0,0),6.R=b e(0,0),6.2f=7(t){6.1f.1d(t)},6.2g=7(t){g i=6.2h(6.9);i.2b(6.1H);g s=b e(6.R.x,6.R.y);s.W(t),6.9.1d(s),i.W(t),6.R.1d(i),6.1f=b e(0,0)},6.2h=7(t,i){g s=b e(6.1f.x,6.1f.y),n=6.R.2a(),o=b e(6.R.x,6.R.y);q o.W(6.2e*6.1H*n),s.1e(o),s}}7 n(s,o){6.E=b e(s,o),6.2i=36*k()+37,6.1I=t*k()*1J,6.1K=t*k()*1J,6.1g=1,6.1h=5,6.1i=1.5*k()+.5,6.2j=40,6.1j=38*k()+2k,6.X=b 1k,6.F=k();g r=P(k()*(i.1L-1));6.Y=i[r][0],6.Z=i[r][1];v(g a=0;a<4;a++){g h=Q(6.1I+t*(2l*a+45)),c=K(6.1I+t*(2l*a+45));6.X[a]=b e(h,c)}6.1p=7(i){6.F+=i,6.1K+=6.2i*i,6.1g=Q(t*6.1K),6.E.x+=Q(6.F*6.1i)*6.2j*i,6.E.y+=6.1j*i,6.E.y>n.C.y&&(6.E.x=k()*n.C.x,6.E.y=0)},6.1q=7(t){6.1g>0?t.1r=6.Y:t.1r=6.Z,t.L(),t.S((6.E.x+6.X[0].x*6.1h)*j,(6.E.y+6.X[0].y*6.1h*6.1g)*j);v(g i=1;i<4;i++)t.A((6.E.x+6.X[i].x*6.1h)*j,(6.E.y+6.X[i].y*6.1h*6.1g)*j);t.13(),t.14()}}7 o(n,r,a,h,c,l,d,p){6.1l=h,6.H=a,6.1M=d,6.1N=p,6.f=b 1k;g u=P(k()*(i.1L-1));6.Y=i[u][0],6.Z=i[u][1],6.1O=Q(t*l)*c,6.1P=K(t*l)*c,6.9=b e(n,r),6.1m=b e(n,r),6.1Q=2*k()+4,6.F=15*k(),6.1i=2*k()+2,6.1R=40*k()+40,6.1j=40*k()+2m;v(g y=0;y<6.H;y++)6.f[y]=b s(n,r-y*6.1l,6.1M,6.1N);6.1p=7(t){g i=0;6.F+=t*6.1i,6.9.y+=6.1j*t,6.9.x+=Q(6.F)*6.1R*t,6.f[0].9=6.9;g s=6.1m.x-6.9.x,n=6.1m.y-6.9.y,r=O(s*s+n*n);v(6.1m=b e(6.9.x,6.9.y),i=1;i<6.H;i++){g a=e.1e(6.f[i-1].9,6.f[i].9);a.1F(),a.W(r/t*6.1Q),6.f[i].2f(a)}v(i=1;i<6.H;i++)6.f[i].2g(t);v(i=1;i<6.H;i++){g h=b e(6.f[i].9.x,6.f[i].9.y);h.1e(6.f[i-1].9),h.1F(),h.W(6.1l),h.1d(6.f[i-1].9),6.f[i].9=h}6.9.y>o.C.y+6.1l*6.H&&6.2n()},6.2n=7(){6.9.y=-k()*o.C.y,6.9.x=k()*o.C.x,6.1m=b e(6.9.x,6.9.y),6.1Q=2*k()+4,6.F=15*k(),6.1i=2*k()+1.5,6.1R=40*k()+40,6.1j=40*k()+2m;g t=P(k()*(i.1L-1));6.Y=i[t][0],6.Z=i[t][1],6.f=b 1k;v(g n=0;n<6.H;n++)6.f[n]=b s(6.9.x,6.9.y-n*6.1l,6.1M,6.1N)},6.1q=7(t){v(g i=0;i<6.H-1;i++){g s=b e(6.f[i].9.x+6.1O,6.f[i].9.y+6.1P),n=b e(6.f[i+1].9.x+6.1O,6.f[i+1].9.y+6.1P);6.2o(6.f[i].9.x,6.f[i].9.y,6.f[i+1].9.x,6.f[i+1].9.y,n.x,n.y)<0?(t.1r=6.Y,t.1s=6.Y):(t.1r=6.Z,t.1s=6.Z),0==i?(t.L(),t.S(6.f[i].9.x*j,6.f[i].9.y*j),t.A(6.f[i+1].9.x*j,6.f[i+1].9.y*j),t.A(.5*(6.f[i+1].9.x+n.x)*j,.5*(6.f[i+1].9.y+n.y)*j),t.13(),t.T(),t.14(),t.L(),t.S(n.x*j,n.y*j),t.A(s.x*j,s.y*j),t.A(.5*(6.f[i+1].9.x+n.x)*j,.5*(6.f[i+1].9.y+n.y)*j),t.13(),t.T(),t.14()):i==6.H-2?(t.L(),t.S(6.f[i].9.x*j,6.f[i].9.y*j),t.A(6.f[i+1].9.x*j,6.f[i+1].9.y*j),t.A(.5*(6.f[i].9.x+s.x)*j,.5*(6.f[i].9.y+s.y)*j),t.13(),t.T(),t.14(),t.L(),t.S(n.x*j,n.y*j),t.A(s.x*j,s.y*j),t.A(.5*(6.f[i].9.x+s.x)*j,.5*(6.f[i].9.y+s.y)*j),t.13(),t.T(),t.14()):(t.L(),t.S(6.f[i].9.x*j,6.f[i].9.y*j),t.A(6.f[i+1].9.x*j,6.f[i+1].9.y*j),t.A(n.x*j,n.y*j),t.A(s.x*j,s.y*j),t.13(),t.T(),t.14())}},6.2o=7(t,i,e,s,n,o){q(t-e)*(o-s)-(i-s)*(n-e)}}e.39=7(t,i,s){q b e((i.x-t.x)*s+t.x,(i.y-t.y)*s+t.y)},e.3a=7(t,i){q O(e.2p(t,i))},e.2p=7(t,i){g e=t.x-i.x,s=t.y-i.y;q e*e+s*s+z*z},e.3b=7(t,i){q b e(t.x*i.x,t.y*i.y)},e.3c=7(t,i){q b e(m.2q(t.x,i.x),m.2q(t.y,i.y))},e.3d=7(t,i){q b e(m.1S(t.x,i.x),m.1S(t.y,i.y))},e.3e=7(t,i){g s=t.2c;q b e(s.x*i,s.y*i)},e.1e=7(t,i){q b e(t.x-i.x,t.y-i.y,t.z-i.z)},n.C=b e(0,0),o.C=b e(0,0),(r={}).2r=7(t){g i=0,s=I.M(t),a=s.3f,h=a.2s,c=a.2t;s.17=h*j,s.19=c*j;g l=s.2u("2d"),d=b 1k;v(o.C=b e(h,c),i=0;i<11;i++)d[i]=b o(k()*h,-k()*c*2,30,8,8,45,1,.3g);g p=b 1k;v(n.C=b e(h,c),i=0;i<2v;i++)p[i]=b n(k()*h,k()*c);6.U=7(){h=a.2s,c=a.2t,s.17=h*j,s.19=c*j,n.C=b e(h,c),o.C=b e(h,c)},6.2w=7(){6.2x();6.1T()},6.2x=7(){1C(6.2y)},6.1T=7(){g t=0;v(l.2z(0,0,s.17,s.19),t=0;t<2v;t++)p[t].1p(.2A),p[t].1q(l);v(t=0;t<11;t++)d[t].1p(.2A),d[t].1q(l);6.2y=1B(7(){r.1T()})}};g r=b r.2r("3h");r.2w(),N.2B("U",7(t){r.U()})}!7(t){g i=1D();g e=t.26||t.3i||t.3j;1B=t.25||t.3k||7(t){g e=1D(),s=m.1S(0,16-(e-i)),n=2C(t,s);q i=e,n},1C=7(i){e.3l(t,i)}}(N);g F=b 1E,1a=I.M("1a"),1b=I.M("1b"),B=I.B,1U=F.3m(),1t=I.M("1t"),G=I.M("3n"),1V=G.2u("2d"),U=7(){G.17=G.3o,G.19=G.3p};N.2B("U",U),U();v(g 1n=[],1W={o:7(t,i,e,s,n){q{x:t,y:i,r:12*e,w:5*e,1u:s,1v:n,1X:7(i,e){6.x+=6.1u,6.y+=6.1v,i.L(),i.3q(6.x+3*+m.K((2k+t+e/10)/15),6.y+4*+m.K((45+t+e/10)/15),6.r,0,2*m.1c,!1),i.2D=6.w,i.1s="#3r",i.T()}}},x:7(t,i,e,s,n,o,r){q{x:t,y:i,s:20*e,w:5*e,r:r=r||0,1u:s,1v:n,2E:o,1X:7(i,e){6.x+=6.1u,6.y+=6.1v,6.r+=6.2E;g s=6,n=7(t,e,n,o,r,a){a=a||0,i.L(),i.S(-a+s.s/2*t,a+s.s/2*e),i.A(-a+s.s/2*n,a+s.s/2*o),i.2D=s.w,i.1s=r,i.T()};i.3s(),i.3t(6.x+5*m.K((t+e/10)/15),6.y+2*m.K((10+t+e/10)/15)),i.3u(6.r*m.1c/29),n(-1,-1,1,1,"#2F"),n(1,-1,-1,1,"#2F"),i.3v()}}}},x=0;x<G.17;x++)v(g y=0;y<G.19;y++)1G(1==m.P(3w*m.k())){g s=(5*m.k()+1)/10;1==m.P(m.k())?1n.2G(1W.o(x,y,s,0,0)):1n.2G(1W.x(x,y,s,0,0,(3*m.k()-1)/10,1J*m.k()))}7 2H(t){1Y(7(){v(g t 3x 1V.2z(0,0,G.17,G.19),1n)1n[t].1X(1V,F.27())},10)}7 1Z(t){q(3y(t,10)<10?"0":"")+t}7 21(){g t=I.M("3z"),i=I.M("3A"),e=I.M("3B");t.J=1Z(1w().3C()),i.J=1Z(1w().3D()),e.J=1w().2I("2J").2K("2L 2M 3E"),2C(21,3F)}7 2N(){2H(),1U<12?(1a.1x("1y","#3G"),B.D.1z("22"),B.D.V("1A"),B.D.V("23"),1b.J="3H!!!"):1U<18?(1a.1x("1y","#3I"),B.D.V("22"),B.D.V("1A"),B.D.V("23"),B.D.1z("1A"),1b.J="3J!!!"):(1a.1x("1y","#3K"),B.D.V("1A"),B.D.V("22"),B.D.1z("23"),1b.J="3L!!!")}7 2O(){28(),1a.1x("1y","#3M"),B.D.1z("3N"),1b.J="3O 3P 3Q!!!"}7 2P(){"30 3R"!==1w().2I("2J").2K("2L 2M")?2N():2O()}g 24=["2Q 2R 3S","3T 3U 3V 2R!","3W 3X 3Y","3Z 41 42!","43 2S-2S","2Q 44","46 47 48 49?","4a 4b 4c 4d"];1t.J=24[m.2T(8*m.k())],21(),1Y(2P(),4e),1Y(()=>{1t.J=24[m.2T(8*m.k())]},4f);',62,264,'||||||this|function||position||new||||particles|var|||retina|random||Math||||return|||||for|||||lineTo|body|bounds|classList|pos|time|Canvas|particleCount|document|innerHTML|sin|beginPath|getElementById|window|sqrt|round|cos|velocity|moveTo|stroke|resize|remove|Mul|corners|frontColor|backColor||||closePath|fill|100||width||height|androbar|grettings|PI|Add|Sub|force|cosA|size|oscillationSpeed|ySpeed|Array|particleDist|prevPosition|elements|SqrLength|Update|Draw|fillStyle|strokeStyle|quote|dx|dy|dayjs|setAttribute|content|add|grad2|rAF|cAF|_now|Date|Normalize|if|mass|angle|360|rotation|length|particleMass|particleDrag|xOff|yOff|velocityInherit|oscillationDistance|max|update|jam|ctx|presets|draw|setInterval|addZero||ClockTime|grad1|grad3|quotes|requestAnimationFrame|cancelAnimationFrame|getTime|Confetti|180|Length|Div|Normalized||drag|AddForce|Integrate|CurrentForce|rotationSpeed|xSpeed|50|90|80|Reset|Side|SqrDistance|min|Context|offsetWidth|offsetHeight|getContext|95|start|stop|interval|clearRect|02|addEventListener|setTimeout|lineWidth|dr|FFEDBC|push|Particle|locale|id|format|DD|MMMM|BgGreetingChange|hbd|greet|Jangan|lupa|dikit|floor|devicePixelRatio|cancelRequestAnimationFrame|now|df0049|660671|00e857||005291|2bebbc|05798a|ffd200|b06c00|600|800|60|Lerp|Distance|Scale|Min|Max|ClampMagnitude|parentNode|05|confetti|webkitCancelAnimationFrame|clearTimeout|webkitRequestAnimationFrame|call|getHours|canvas|clientWidth|clientHeight|arc|f2fcfe|save|translate|rotate|restore|8e3|in|parseInt|hours|minutes|date|hour|minute|YYYY|1e3|426fed|Pagi|FFC837|Sore|004e92|Malam|fc00ff|grad4|Selamat|Ulang|Tahun|Juli|makan|Minum|obat|jangan|Mending|inget|tuhan|Sekolah||yang|bener|Belajar|pikun||Dah|besar|masih|nangid|Kalo|malem|tidur|bego|1e4|5e3'.split('|'),0,{}))