"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./entities/card");
var user_1 = require("./entities/user");
var card_repository_1 = require("./repository/card-repository");
var cardRepository = new card_repository_1.CardRepository();
var user = new user_1.User("Kent", "Mark", "+998998961348", "root123");
var card1 = new card_1.Card("8600 0204 5687 9154", "12/26", "UZCARD", 200000, user.id, "TBC BANK");
var card2 = new card_1.Card("8600 0204 5687 1348", "12/26", "HUMO", 1000000, user.id, "ANOR BANK");
cardRepository.create(card1);
cardRepository.create(card2);
console.log(cardRepository.getById(card2.getId()));