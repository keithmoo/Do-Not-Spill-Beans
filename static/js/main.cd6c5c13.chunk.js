(this["webpackJsonpDo-Not-Spill-Beans"]=this["webpackJsonpDo-Not-Spill-Beans"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bean.e62fdc1a.png"},function(e,t,a){e.exports=a.p+"static/media/killerBean.82ed41b4.png"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(6),r=a.n(c),s=a(1),i=a(2),u=a(4),m=a(3),E=a(7),h=a.n(E),o=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={},l}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bean"},n.a.createElement("img",{src:h.a,alt:"bean",id:"beanpic"}))}}]),a}(n.a.Component),d=a(8),b=a.n(d),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).handleButtonClickLeft=function(){var e=.15*Math.random();l.setState({beansLeft:l.state.beansLeft+1,leftBalance:e+l.state.leftBalance+1,balancing:!0}),l.timeout=setTimeout((function(){l.setState({balancing:!1})}),2500)},l.handleButtonClickRight=function(){var e=2.2*(Math.random()+.15);l.setState({beansRight:l.state.beansRight+1,rightBalance:e+l.state.rightBalance+1,balancing:!0}),l.timeout=setTimeout((function(){l.setState({balancing:!1})}),2500)},l.hide=function(){l.setState({rulesHidden:!0,rulesShown:!1})},l.show=function(){l.setState({rulesHidden:!1,rulesShown:!0})},l.restart=function(){l.setState({beansLeft:0,beansRight:0,balancing:!1,leftBalance:0,rightBalance:0,spilled:!1,rulesHidden:!1,rulesShown:!0})},l.state={beansLeft:0,beansRight:0,balancing:!1,leftBalance:0,rightBalance:0,spilled:!1,rulesHidden:!1,rulesShown:!0},l}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"addBeanLeft",value:function(){var e=this.state.beansLeft;return 1===e?n.a.createElement(o,null):2===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null)):3===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):4===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):5===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):6===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):7===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):8===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):9===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):10===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):void 0}},{key:"addBeanRight",value:function(){var e=this.state.beansRight;return 1===e?n.a.createElement(o,null):2===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null)):3===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):4===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):5===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):6===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):7===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):8===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):9===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):10===e?n.a.createElement("div",{className:"beanBucket"},n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null),n.a.createElement(o,null)):void 0}},{key:"balanceOutcome",value:function(){if(!0===this.state.balancing)return"whoa...easy...easy...it's teetering.....is it going to spill?";if(this.state.leftBalance>this.state.rightBalance+3.6)this.setState({spilled:!0});else{if(!(this.state.rightBalance>this.state.leftBalance+3.6))return"It's stable!";this.setState({spilled:!0})}}},{key:"warning",value:function(){var e=Math.ceil(10*Math.random());return e>3&&this.state.rightBalance>this.state.leftBalance+1.9&&!1===this.state.balancing||e>3&&this.state.leftBalance>this.state.rightBalance+1.9&&!1===this.state.balancing?n.a.createElement("div",{className:"red"}):void 0}},{key:"render",value:function(){return!1===this.state.spilled?n.a.createElement("div",{className:"buttons"},n.a.createElement("p",{className:"rules",hidden:this.state.rulesHidden},"This is a simple balance game.  You must add 10 beans to the scale. If either side becomes too heavy, it will spill the beans and you lose. The scale is hidden, although you know where each end of it is. Additionally, the scale isn't perfect; beans added to the right seem much heavier to it than beans added to the left.  Another imperfection to the scale is that it sees each bean with some random variance.  There is much more variance for beans put on the right than on the left, but beans put on the right will still almost always seem heavier than those put on the left, and if it does register as lighter from the variance, it will be by the slightest amount.  Usually, beans on the right weight almost thrice as much as beans on the left, but that shouldn't be taken as gospel considering the variance. There is a warning light that turns on if one side is getting close to tipping, although it also isn't perfect; sometimes it doesn't turn on when it should.  It also doesn't warn specifically which side is near tipping over.  If 10 beans are balanced at once, you earn a guess.  You may earn an additional guess by placing an eleventh bean.  Should the eleventh bean cause a spill, you lose the originally earned guess as well.",n.a.createElement("button",{hidden:this.state.rulesHidden,onClick:this.hide},"Hide Rules")),n.a.createElement("p",null,n.a.createElement("button",{hidden:this.state.rulesShown,onClick:this.show},"Show Rules")),n.a.createElement("button",{id:"push",onClick:this.handleButtonClickLeft,disabled:this.state.balancing},"Add Bean Left"),n.a.createElement("button",{id:"push",onClick:this.handleButtonClickRight,disabled:this.state.balancing},"Add Bean Right"),n.a.createElement("p",null,this.balanceOutcome()),n.a.createElement("div",{className:"stage"},n.a.createElement("div",{className:"balanceStage"},this.addBeanLeft()),n.a.createElement("div",{className:"balanceStage"},this.addBeanRight())),n.a.createElement("p",{className:"warningText"},"Warning Light:"),n.a.createElement("div",{className:"Warning"},this.warning())):n.a.createElement("div",null,n.a.createElement("p",null,"You spilled the beans!"),n.a.createElement("p",null,n.a.createElement("button",{onClick:this.restart},"Try Again")),n.a.createElement("p",null,n.a.createElement("img",{src:b.a,alt:"how could you"})))}}]),a}(n.a.Component);var f=function(){return n.a.createElement("main",{className:"App"},n.a.createElement(g,null))};a(14);r.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cd6c5c13.chunk.js.map