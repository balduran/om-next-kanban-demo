// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.card');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
kanban.components.card.Assignee = (function kanban$components$card$Assignee(){
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x10101_10111 = kanban.components.card.Assignee.prototype;
x10101_10111.componentWillUpdate = ((function (x10101_10111){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x10101_10111))
;

x10101_10111.shouldComponentUpdate = ((function (x10101_10111){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7520__auto__),goog.object.get(next_props__7521__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7520__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7520__auto__.state,"omcljs$state"),goog.object.get(next_state__7522__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x10101_10111))
;

x10101_10111.componentWillUnmount = ((function (x10101_10111){
return (function (){
var this__7520__auto__ = this;
var r__7526__auto__ = om.next.get_reconciler.call(null,this__7520__auto__);
var cfg__7527__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7526__auto__);
var st__7528__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
var indexer__7525__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
if((st__7528__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7528__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7520__auto__);
}

if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10101_10111))
;

x10101_10111.componentDidUpdate = ((function (x10101_10111){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x10101_10111))
;

x10101_10111.isMounted = ((function (x10101_10111){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10101_10111))
;

x10101_10111.componentWillMount = ((function (x10101_10111){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10101_10111))
;

x10101_10111.render = ((function (x10101_10111){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10102 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10103 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10104 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10105 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10106 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__10107 = om.next.props.call(null,this$);
var map__10107__$1 = ((((!((map__10107 == null)))?((((map__10107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10107):map__10107);
var username = cljs.core.get.call(null,map__10107__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__10107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var selected = cljs.core.get.call(null,map__10107__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__10107__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__10107__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assignee",(cljs.core.truth_(selected)?"selected":null)], null)), "onClick": ((function (map__10107,map__10107__$1,username,name,selected,with_name,activate_fn,_STAR_reconciler_STAR_10102,_STAR_depth_STAR_10103,_STAR_shared_STAR_10104,_STAR_instrument_STAR_10105,_STAR_parent_STAR_10106,this$,x10101_10111){
return (function (){
if(cljs.core.truth_(activate_fn)){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
} else {
return null;
}
});})(map__10107,map__10107__$1,username,name,selected,with_name,activate_fn,_STAR_reconciler_STAR_10102,_STAR_depth_STAR_10103,_STAR_shared_STAR_10104,_STAR_instrument_STAR_10105,_STAR_parent_STAR_10106,this$,x10101_10111))
, "title": name},(cljs.core.truth_(with_name)?[cljs.core.str(name),cljs.core.str(" (@"),cljs.core.str(username),cljs.core.str(")"),cljs.core.str(" ")].join(''):[cljs.core.str("@"),cljs.core.str(username),cljs.core.str(" ")].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10106;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10105;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10104;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10103;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10102;
}});})(x10101_10111))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x10109_10112 = kanban.components.card.Assignee;
x10109_10112.om$next$Ident$ = true;

x10109_10112.om$next$Ident$ident$arity$2 = ((function (x10109_10112){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10109_10112))
;

x10109_10112.om$next$IQuery$ = true;

x10109_10112.om$next$IQuery$query$arity$1 = ((function (x10109_10112){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10109_10112))
;


var x10110_10113 = kanban.components.card.Assignee.prototype;
x10110_10113.om$next$Ident$ = true;

x10110_10113.om$next$Ident$ident$arity$2 = ((function (x10110_10113){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10110_10113))
;

x10110_10113.om$next$IQuery$ = true;

x10110_10113.om$next$IQuery$query$arity$1 = ((function (x10110_10113){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10110_10113))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x10118_10132 = kanban.components.card.Card.prototype;
x10118_10132.componentWillUpdate = ((function (x10118_10132){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x10118_10132))
;

x10118_10132.shouldComponentUpdate = ((function (x10118_10132){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7520__auto__),goog.object.get(next_props__7521__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7520__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7520__auto__.state,"omcljs$state"),goog.object.get(next_state__7522__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x10118_10132))
;

x10118_10132.componentWillUnmount = ((function (x10118_10132){
return (function (){
var this__7520__auto__ = this;
var r__7526__auto__ = om.next.get_reconciler.call(null,this__7520__auto__);
var cfg__7527__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7526__auto__);
var st__7528__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
var indexer__7525__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
if((st__7528__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7528__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7520__auto__);
}

if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10118_10132))
;

x10118_10132.componentDidUpdate = ((function (x10118_10132){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x10118_10132))
;

x10118_10132.isMounted = ((function (x10118_10132){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10118_10132))
;

x10118_10132.componentWillMount = ((function (x10118_10132){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10118_10132))
;

x10118_10132.render = ((function (x10118_10132){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10119 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10120 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10121 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10122 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10123 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__10124 = om.next.props.call(null,this$);
var map__10124__$1 = ((((!((map__10124 == null)))?((((map__10124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10124):map__10124);
var id = cljs.core.get.call(null,map__10124__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__10124__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__10124__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var drag_fns = cljs.core.get.call(null,map__10124__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var edit_fn = cljs.core.get.call(null,map__10124__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132){
return (function (){
return edit_fn.call(null,ref);
});})(ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132))
, "draggable": true, "onDragStart": ((function (ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132){
return (function (){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132))
, "onDragEnd": ((function (ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132){
return (function (){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132){
return (function kanban$components$card$iter__10126(s__10127){
return (new cljs.core.LazySeq(null,((function (ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132){
return (function (){
var s__10127__$1 = s__10127;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10127__$1);
if(temp__4425__auto__){
var s__10127__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10127__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__10127__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__10129 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__10128 = (0);
while(true){
if((i__10128 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__10128);
cljs.core.chunk_append.call(null,b__10129,kanban.components.card.assignee.call(null,a));

var G__10133 = (i__10128 + (1));
i__10128 = G__10133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10129),kanban$components$card$iter__10126.call(null,cljs.core.chunk_rest.call(null,s__10127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10129),null);
}
} else {
var a = cljs.core.first.call(null,s__10127__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__10126.call(null,cljs.core.rest.call(null,s__10127__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132))
,null,null));
});})(ref,map__10124,map__10124__$1,id,text,assignees,drag_fns,edit_fn,_STAR_reconciler_STAR_10119,_STAR_depth_STAR_10120,_STAR_shared_STAR_10121,_STAR_instrument_STAR_10122,_STAR_parent_STAR_10123,this$,x10118_10132))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10123;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10122;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10121;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10120;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10119;
}});})(x10118_10132))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x10130_10134 = kanban.components.card.Card;
x10130_10134.om$next$Ident$ = true;

x10130_10134.om$next$Ident$ident$arity$2 = ((function (x10130_10134){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10130_10134))
;

x10130_10134.om$next$IQuery$ = true;

x10130_10134.om$next$IQuery$query$arity$1 = ((function (x10130_10134){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x10130_10134))
;


var x10131_10135 = kanban.components.card.Card.prototype;
x10131_10135.om$next$Ident$ = true;

x10131_10135.om$next$Ident$ident$arity$2 = ((function (x10131_10135){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10131_10135))
;

x10131_10135.om$next$IQuery$ = true;

x10131_10135.om$next$IQuery$query$arity$1 = ((function (x10131_10135){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x10131_10135))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map