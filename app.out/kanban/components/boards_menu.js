// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.boards_menu');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
kanban.components.boards_menu.BoardMenuItem = (function kanban$components$boards_menu$BoardMenuItem(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x8333_8345 = kanban.components.boards_menu.BoardMenuItem.prototype;
x8333_8345.componentWillUpdate = ((function (x8333_8345){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x8333_8345))
;

x8333_8345.shouldComponentUpdate = ((function (x8333_8345){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x8333_8345))
;

x8333_8345.componentWillUnmount = ((function (x8333_8345){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8333_8345))
;

x8333_8345.componentDidUpdate = ((function (x8333_8345){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x8333_8345))
;

x8333_8345.isMounted = ((function (x8333_8345){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8333_8345))
;

x8333_8345.componentWillMount = ((function (x8333_8345){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8333_8345))
;

x8333_8345.render = ((function (x8333_8345){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8334 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8335 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8336 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8337 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8338 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__8339 = om.next.props.call(null,this$);
var map__8339__$1 = ((((!((map__8339 == null)))?((((map__8339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8339):map__8339);
var name = cljs.core.get.call(null,map__8339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8340 = om.next.get_computed.call(null,this$);
var map__8340__$1 = ((((!((map__8340 == null)))?((((map__8340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8340):map__8340);
var activate_fn = cljs.core.get.call(null,map__8340__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__8339,map__8339__$1,name,map__8340,map__8340__$1,activate_fn,_STAR_reconciler_STAR_8334,_STAR_depth_STAR_8335,_STAR_shared_STAR_8336,_STAR_instrument_STAR_8337,_STAR_parent_STAR_8338,this$,x8333_8345){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8339,map__8339__$1,name,map__8340,map__8340__$1,activate_fn,_STAR_reconciler_STAR_8334,_STAR_depth_STAR_8335,_STAR_shared_STAR_8336,_STAR_instrument_STAR_8337,_STAR_parent_STAR_8338,this$,x8333_8345))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8338;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8337;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8336;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8335;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8334;
}});})(x8333_8345))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x8343_8346 = kanban.components.boards_menu.BoardMenuItem;
x8343_8346.om$next$Ident$ = true;

x8343_8346.om$next$Ident$ident$arity$2 = ((function (x8343_8346){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8343_8346))
;

x8343_8346.om$next$IQuery$ = true;

x8343_8346.om$next$IQuery$query$arity$1 = ((function (x8343_8346){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8343_8346))
;


var x8344_8347 = kanban.components.boards_menu.BoardMenuItem.prototype;
x8344_8347.om$next$Ident$ = true;

x8344_8347.om$next$Ident$ident$arity$2 = ((function (x8344_8347){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8344_8347))
;

x8344_8347.om$next$IQuery$ = true;

x8344_8347.om$next$IQuery$query$arity$1 = ((function (x8344_8347){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8344_8347))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.call(null,kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x8352_8368 = kanban.components.boards_menu.BoardsMenu.prototype;
x8352_8368.componentWillUpdate = ((function (x8352_8368){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x8352_8368))
;

x8352_8368.shouldComponentUpdate = ((function (x8352_8368){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x8352_8368))
;

x8352_8368.componentWillUnmount = ((function (x8352_8368){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8352_8368))
;

x8352_8368.componentDidUpdate = ((function (x8352_8368){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x8352_8368))
;

x8352_8368.isMounted = ((function (x8352_8368){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8352_8368))
;

x8352_8368.componentWillMount = ((function (x8352_8368){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8352_8368))
;

x8352_8368.render = ((function (x8352_8368){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8353 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8354 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8355 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8356 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8357 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var map__8358 = om.next.props.call(null,this$);
var map__8358__$1 = ((((!((map__8358 == null)))?((((map__8358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8358):map__8358);
var boards = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__8359 = om.next.get_computed.call(null,this$);
var map__8359__$1 = ((((!((map__8359 == null)))?((((map__8359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8359):map__8359);
var activate_fn = cljs.core.get.call(null,map__8359__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var iter__5866__auto__ = ((function (map__8358,map__8358__$1,boards,map__8359,map__8359__$1,activate_fn,_STAR_reconciler_STAR_8353,_STAR_depth_STAR_8354,_STAR_shared_STAR_8355,_STAR_instrument_STAR_8356,_STAR_parent_STAR_8357,this$,x8352_8368){
return (function kanban$components$boards_menu$iter__8362(s__8363){
return (new cljs.core.LazySeq(null,((function (map__8358,map__8358__$1,boards,map__8359,map__8359__$1,activate_fn,_STAR_reconciler_STAR_8353,_STAR_depth_STAR_8354,_STAR_shared_STAR_8355,_STAR_instrument_STAR_8356,_STAR_parent_STAR_8357,this$,x8352_8368){
return (function (){
var s__8363__$1 = s__8363;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8363__$1);
if(temp__4425__auto__){
var s__8363__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8363__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8363__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8365 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8364 = (0);
while(true){
if((i__8364 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__8364);
cljs.core.chunk_append.call(null,b__8365,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__8369 = (i__8364 + (1));
i__8364 = G__8369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8365),kanban$components$boards_menu$iter__8362.call(null,cljs.core.chunk_rest.call(null,s__8363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8365),null);
}
} else {
var board = cljs.core.first.call(null,s__8363__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__8362.call(null,cljs.core.rest.call(null,s__8363__$2)));
}
} else {
return null;
}
break;
}
});})(map__8358,map__8358__$1,boards,map__8359,map__8359__$1,activate_fn,_STAR_reconciler_STAR_8353,_STAR_depth_STAR_8354,_STAR_shared_STAR_8355,_STAR_instrument_STAR_8356,_STAR_parent_STAR_8357,this$,x8352_8368))
,null,null));
});})(map__8358,map__8358__$1,boards,map__8359,map__8359__$1,activate_fn,_STAR_reconciler_STAR_8353,_STAR_depth_STAR_8354,_STAR_shared_STAR_8355,_STAR_instrument_STAR_8356,_STAR_parent_STAR_8357,this$,x8352_8368))
;
return iter__5866__auto__.call(null,boards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8357;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8356;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8355;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8354;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8353;
}});})(x8352_8368))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x8366_8370 = kanban.components.boards_menu.BoardsMenu;


var x8367_8371 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map