// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__8661_SHARP_){
return kanban.parsing.cards.resolve_cards.call(null,st,p1__8661_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8662_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__8662_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8663_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__8663_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__8664,key,_){
var map__8665 = p__8664;
var map__8665__$1 = ((((!((map__8665 == null)))?((((map__8665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8665):map__8665);
var state = cljs.core.get.call(null,map__8665__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.lanes.get_lanes.call(null,st,key)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__8668 = cards;
var G__8668__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.call(null,G__8668,ref):G__8668);
return G__8668__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__8669,_,p__8670){
var map__8671 = p__8669;
var map__8671__$1 = ((((!((map__8671 == null)))?((((map__8671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8671):map__8671);
var state = cljs.core.get.call(null,map__8671__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8672 = p__8670;
var map__8672__$1 = ((((!((map__8672 == null)))?((((map__8672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8672):map__8672);
var card = cljs.core.get.call(null,map__8672__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__8672__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__8672__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8671,map__8671__$1,state,map__8672,map__8672__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__8671,map__8671__$1,state,map__8672,map__8672__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__8677 = kanban.parsing.cards.create_card.call(null,st);
var map__8677__$1 = ((((!((map__8677 == null)))?((((map__8677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8677):map__8677);
var card = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var state = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card),new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null),(function (p__8679,_,p__8680){
var map__8681 = p__8679;
var map__8681__$1 = ((((!((map__8681 == null)))?((((map__8681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8681):map__8681);
var state = cljs.core.get.call(null,map__8681__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8682 = p__8680;
var map__8682__$1 = ((((!((map__8682 == null)))?((((map__8682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8682):map__8682);
var lane = cljs.core.get.call(null,map__8682__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8681,map__8681__$1,state,map__8682,map__8682__$1,lane){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.create_card,lane);
});})(map__8681,map__8681__$1,state,map__8682,map__8682__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.call(null,kanban.parsing.cards.delete_card.call(null,st,card),cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),(function (p1__8686_SHARP_,p2__8685_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__8685_SHARP_], true),p1__8686_SHARP_);
}),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null),(function (p__8687,_,p__8688){
var map__8689 = p__8687;
var map__8689__$1 = ((((!((map__8689 == null)))?((((map__8689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8689):map__8689);
var state = cljs.core.get.call(null,map__8689__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8690 = p__8688;
var map__8690__$1 = ((((!((map__8690 == null)))?((((map__8690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8690):map__8690);
var lane = cljs.core.get.call(null,map__8690__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
var card = cljs.core.get.call(null,map__8690__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8689,map__8689__$1,state,map__8690,map__8690__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__8689,map__8689__$1,state,map__8690,map__8690__$1,lane,card))
], null);
}));

//# sourceMappingURL=lanes.js.map