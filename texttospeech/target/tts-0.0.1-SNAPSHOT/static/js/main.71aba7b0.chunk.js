(this.webpackJsonptexttospeech=this.webpackJsonptexttospeech||[]).push([[0],{61:function(e,t,a){e.exports=a(76)},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=a(23),s=a(16),i=a(28),u=a(29),p=a(33),m=(a(66),a(114)),d=a(115),h=a(116),f=a(105),E=a(108),b=a(49),v=a.n(b),S=a(110),g=a(111),y=a(112),x=a(113),O=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var w=function(){var e=O();return l.a.createElement(E.a,null,l.a.createElement(S.a,null,l.a.createElement(g.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(v.a,null)),l.a.createElement(y.a,{variant:"h6",className:e.title},"Text To Speech"),l.a.createElement(x.a,{edge:"end",color:"inherit"},"Login")))},j=a(118),k=a(119),C=(a(72),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleTextArea=function(e){a.props.updateInput(e.target.value)},a.handleSpeedSlider=function(e,t){a.props.updateSpeed(t)},a.handlePitchSlider=function(e,t){a.props.updatePitch(t)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"}),l.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"}),l.a.createElement(d.a,{className:"form"},l.a.createElement(j.a,{id:"outlined-multiline-static",label:"Text Input",multiline:!0,rows:"10",rowsMax:"10",onChange:this.handleTextArea,placeholder:"Your text here...",autoFocus:!0,fullWidth:!0,variant:"outlined",value:this.props.parentState.input})),l.a.createElement(d.a,null,l.a.createElement(h.a,{md:6},l.a.createElement("div",{className:"d-flex"},l.a.createElement(k.a,{defaultValue:1,value:this.props.parentState.speed,onChange:this.handleSpeedSlider,step:.25,valueLabelDisplay:"on",min:.25,max:4,marks:!0})),l.a.createElement("div",{className:"sliderTitle"},"Speed")),l.a.createElement(h.a,{md:6},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(k.a,{defaultValue:0,value:this.props.parentState.pitch,onChange:this.handlePitchSlider,step:2,valueLabelDisplay:"on",min:-20,max:20,marks:!0})),l.a.createElement("div",{className:"sliderTitle"},"Pitch"))))}}]),t}(l.a.Component)),T=a(20),N=a(117),R=(a(73),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).step=function(){var t=e.state.completed,a=t+1;if(t>100)return e.setState({completed:100}),clearTimeout(e.tm),void e.props.progressComplete();e.setState({completed:a}),e.tm=setTimeout(e.step,20)},e.state={completed:0},e.step=e.step.bind(Object(T.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.step()}},{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(N.a,{variant:"determinate",value:this.state.completed}))}}]),t}(l.a.Component));var P=a(51),A=a(25),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={submitted:!1,filename:"",downloadReady:!1,input:"",speed:1,pitch:0},a.setInput=function(e){a.setState({input:e})},a.setSpeed=function(e){a.setState({speed:e})},a.setPitch=function(e){a.setState({pitch:e})},a.progressComplete=function(){a.setState({downloadReady:!0})},a.onSubmit=function(){a.setState({submitted:!0}),function(e,t,a,n){var l=new XMLHttpRequest,r="";l.open("POST","http://thinkpad.kentailab.org:8082/SpringText/tts/request",!0),l.setRequestHeader("Access-Control-Allow-Origin","*"),l.setRequestHeader("Content-Type","application/json");var c='{"email" : "text@test.com","requestText" : "'+e+'","speakingSpeed" : '+t+',"pitch" : '+a+"}";l.send(c),l.onreadystatechange=function(e){l.readyState===XMLHttpRequest.DONE&&200===l.status&&(r=JSON.parse(l.responseText),n(r.filename))}}(a.state.input,a.state.speed,a.state.pitch,(function(e){a.setState({filename:e})}))},a.onDownload=function(){!function(e,t){var a="http://thinkpad.kentailab.org:8082/SpringText/download/"+e;window.location.href=a,t()}(a.state.filename,(function(){a.setState({submitted:!1,progressCompleted:!1,filename:"",downloadReady:!1,input:"",speed:1,pitch:0})}))},a.HomeScreen=function(){return l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(d.a,null,l.a.createElement(C,{parentState:a.state,updateInput:a.setInput,updateSpeed:a.setSpeed,updatePitch:a.setPitch})),l.a.createElement(d.a,null,l.a.createElement("div",{className:"progressBar"},a.state.submitted?l.a.createElement(R,{progressComplete:a.progressComplete}):null)),l.a.createElement(d.a,null,l.a.createElement(h.a,{className:"text-center"},a.state.downloadReady?l.a.createElement(x.a,{variant:"contained",color:"primary",onClick:a.onDownload},"Download"):l.a.createElement(x.a,{variant:"contained",color:"primary",onClick:a.onSubmit},"Submit"))))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement(P.a,{basename:"/tts"},l.a.createElement(A.c,null,l.a.createElement(A.a,{path:"/",component:this.HomeScreen}))))}}]),t}(l.a.Component);c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.71aba7b0.chunk.js.map