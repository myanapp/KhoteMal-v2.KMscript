const $ = (x) => {
  var _select = document.querySelectorAll(x);
  if (_select.length > 1) {
    return document.querySelectorAll(x);
  } else {
    return document.querySelector(x);
  }
};

/*
 * * SEARCH ID to STRING UNIT * *
 */
const KM = {
  init: {
    nav: () => {
      var ul = document.querySelectorAll('[km-menu]');
      if (ul) {
        var menu = new XMLHttpRequest();
        menu.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            for (var i = 0; i < res.length; i++) {
              li = document.createElement('li');
              a = document.createElement('a');
              txt = document.createTextNode(res[i].node);
              a.setAttribute('href', res[i].href);
              a.appendChild(txt);
              li.appendChild(a);
              ul[0].appendChild(li),
                ul[1].appendChild(li);
            }
          }
        }
        menu.open('GET', '/assets/nav-menu.json', true);
        menu.send();
      }
    }
  },
  request: (x) => {
    xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        $_ACCOUNT.push(JSON.parse(this.responseText))
      }
    }
    xmlhttp.open('GET', x, true)
    xmlhttp.send()
  },
  search: {
    lane: (x) => {
      switch (x) {
        case 1:
          return "off-lane"
        case 2:
          return "mid-Lane";
        case 3:
          return "safe-lane";
        case 4:
          return "jungle";
        default:
          return null;
      }
    },
    type: (x) => {
      $arrayThis = [{
        "id": 0,
        "npc": "lobby_type_normal",
        "name": "Normal Match",
        "balanced": true
      }, {
        "id": 1,
        "npc": "lobby_type_practice",
        "name": "Practice Match",
        "balanced": true
      }, {
        "id": 2,
        "npc": "lobby_type_tournament",
        "name": "Tournament Match",
        "balanced": true
      }, {
        "id": 3,
        "npc": "lobby_type_tutorial",
        "name": "Tutorial Match"
      }, {
        "id": 4,
        "npc": "lobby_type_coop_bots",
        "name": "Corporated Bots Match"
      }, {
        "id": 5,
        "npc": "lobby_type_ranked_team_mm",
        "name": "Team Ranked Match",
        "balanced": true
      }, {
        "id": 6,
        "npc": "lobby_type_ranked_solo_mm",
        "name": "Solo Ranked Match",
        "balanced": true
      }, {
        "id": 7,
        "npc": "lobby_type_ranked",
        "name": "Ranked Match",
        "balanced": true
      }, {
        "id": 8,
        "npc": "lobby_type_1v1_mid",
        "name": "1 vs 1 Mid Match"
      }, {
        "id": 9,
        "npc": "lobby_type_battle_cup",
        "name": "Battle Cup Match",
        "balanced": true
      }];

      return $arrayThis[x];
    },
    winner: (x) => {
      if (x == 0 || x == false) {
        return "Dire";
      }
      return "Radiant"
    },
    mode: (x) => {
      $arrayThis = [{
        "id": 0,
        "npc": "game_mode_unknown",
        "name": null,
        "balanced": true
      }, {
        "id": 1,
        "npc": "game_mode_all_pick",
        "name": "All Pick",
        "balanced": true
      }, {
        "id": 2,
        "npc": "game_mode_captains_mode",
        "name": "Captains Mode",
        "balanced": true
      }, {
        "id": 3,
        "npc": "game_mode_random_draft",
        "name": "Random Draft",
        "balanced": true
      }, {
        "id": 4,
        "npc": "game_mode_single_draft",
        "name": "Single Draft",
        "balanced": true
      }, {
        "id": 5,
        "npc": "game_mode_all_random",
        "name": "All Random",
        "balanced": true
      }, {
        "id": 6,
        "npc": "game_mode_intro",
        "name": "Intro"
      }, {
        "id": 7,
        "npc": "game_mode_diretide",
        "name": "Dire Tide"
      }, {
        "id": 8,
        "npc": "game_mode_reverse_captains_mode",
        "name": "Reverse Captains Mode"
      }, {
        "id": 9,
        "npc": "game_mode_greeviling",
        "name": "Greeviling"
      }, {
        "id": 10,
        "npc": "game_mode_tutorial",
        "name": "Turtorial"
      }, {
        "id": 11,
        "npc": "game_mode_mid_only",
        "name": "Mid Only"
      }, {
        "id": 12,
        "npc": "game_mode_least_played",
        "name": "Least Played",
        "balanced": true
      }, {
        "id": 13,
        "npc": "game_mode_limited_heroes",
        "name": "Limited Heroes"
      }, {
        "id": 14,
        "npc": "game_mode_compendium_matchmaking",
        "name": "Compendium Matchmaking"
      }, {
        "id": 15,
        "npc": "game_mode_custom",
        "name": "Custom Mode [Arcade]"
      }, {
        "id": 16,
        "npc": "game_mode_captains_draft",
        "name": "Captains Draft [CD]",
        "balanced": true
      }, {
        "id": 17,
        "npc": "game_mode_balanced_draft",
        "name": "Balanced Draft [SP]",
        "balanced": true
      }, {
        "id": 18,
        "npc": "game_mode_ability_draft",
        "name": "Ability Draft"
      }, {
        "id": 19,
        "npc": "game_mode_event",
        "name": "Event Game"
      }, {
        "id": 20,
        "npc": "game_mode_all_random_death_match",
        "name": "All Random - Death Match"
      }, {
        "id": 21,
        "npc": "game_mode_1v1_mid",
        "name": "1 vs 1 Mid"
      }, {
        "id": 22,
        "npc": "game_mode_all_draft",
        "name": "All Draft",
        "balanced": true
      }, {
        "id": 23,
        "npc": "game_mode_turbo",
        "name": "Turbo Mode"
      }, {
        "id": 24,
        "npc": "game_mode_mutation",
        "name": "Mutation"
      }]

      return $arrayThis[(x || 0)]
    },
    skills: (x) => {
      x = Number(x);
      switch (x) {
        case 1:
          return "Normal Skills";
          break;
        case 2:
          return "High Skills"
          break;
        case 3:
          return "Very High Skills";
          break;
        default:
          return null;
      }
    },
    heroes: (id) => {
      $data_ = [{
        "id": 1,
        "name": "npc_dota_hero_antimage",
        "localized_name": "Anti-Mage",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Nuker"],
        "legs": 2
      }, {
        "id": 2,
        "name": "npc_dota_hero_axe",
        "localized_name": "Axe",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Durable", "Disabler", "Jungler"],
        "legs": 2
      }, {
        "id": 3,
        "name": "npc_dota_hero_bane",
        "localized_name": "Bane",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker", "Durable"],
        "legs": 4
      }, {
        "id": 4,
        "name": "npc_dota_hero_bloodseeker",
        "localized_name": "Bloodseeker",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Disabler", "Jungler", "Nuker", "Initiator"],
        "legs": 2
      }, {
        "id": 5,
        "name": "npc_dota_hero_crystal_maiden",
        "localized_name": "Crystal Maiden",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker", "Jungler"],
        "legs": 2
      }, {
        "id": 6,
        "name": "npc_dota_hero_drow_ranger",
        "localized_name": "Drow Ranger",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Disabler", "Pusher"],
        "legs": 2
      }, {
        "id": 7,
        "name": "npc_dota_hero_earthshaker",
        "localized_name": "Earthshaker",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Support", "Initiator", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 8,
        "name": "npc_dota_hero_juggernaut",
        "localized_name": "Juggernaut",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Pusher", "Escape"],
        "legs": 2
      }, {
        "id": 9,
        "name": "npc_dota_hero_mirana",
        "localized_name": "Mirana",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Support", "Escape", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 10,
        "name": "npc_dota_hero_morphling",
        "localized_name": "Morphling",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Escape", "Durable", "Nuker", "Disabler"],
        "legs": 0
      }, {
        "id": 11,
        "name": "npc_dota_hero_nevermore",
        "localized_name": "Shadow Fiend",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker"],
        "legs": 0
      }, {
        "id": 12,
        "name": "npc_dota_hero_phantom_lancer",
        "localized_name": "Phantom Lancer",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Pusher", "Nuker"],
        "legs": 2
      }, {
        "id": 13,
        "name": "npc_dota_hero_puck",
        "localized_name": "Puck",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Initiator", "Disabler", "Escape", "Nuker"],
        "legs": 2
      }, {
        "id": 14,
        "name": "npc_dota_hero_pudge",
        "localized_name": "Pudge",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Disabler", "Initiator", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 15,
        "name": "npc_dota_hero_razor",
        "localized_name": "Razor",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Durable", "Nuker", "Pusher"],
        "legs": 0
      }, {
        "id": 16,
        "name": "npc_dota_hero_sand_king",
        "localized_name": "Sand King",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Disabler", "Support", "Nuker", "Escape", "Jungler"],
        "legs": 6
      }, {
        "id": 17,
        "name": "npc_dota_hero_storm_spirit",
        "localized_name": "Storm Spirit",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Escape", "Nuker", "Initiator", "Disabler"],
        "legs": 2
      }, {
        "id": 18,
        "name": "npc_dota_hero_sven",
        "localized_name": "Sven",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 19,
        "name": "npc_dota_hero_tiny",
        "localized_name": "Tiny",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Nuker", "Pusher", "Initiator", "Durable", "Disabler"],
        "legs": 2
      }, {
        "id": 20,
        "name": "npc_dota_hero_vengefulspirit",
        "localized_name": "Vengeful Spirit",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Support", "Initiator", "Disabler", "Nuker", "Escape"],
        "legs": 2
      }, {
        "id": 21,
        "name": "npc_dota_hero_windrunner",
        "localized_name": "Windranger",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Support", "Disabler", "Escape", "Nuker"],
        "legs": 2
      }, {
        "id": 22,
        "name": "npc_dota_hero_zuus",
        "localized_name": "Zeus",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Nuker"],
        "legs": 2
      }, {
        "id": 23,
        "name": "npc_dota_hero_kunkka",
        "localized_name": "Kunkka",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Support", "Disabler", "Initiator", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 25,
        "name": "npc_dota_hero_lina",
        "localized_name": "Lina",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Carry", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 26,
        "name": "npc_dota_hero_lion",
        "localized_name": "Lion",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker", "Initiator"],
        "legs": 2
      }, {
        "id": 27,
        "name": "npc_dota_hero_shadow_shaman",
        "localized_name": "Shadow Shaman",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Pusher", "Disabler", "Nuker", "Initiator"],
        "legs": 2
      }, {
        "id": 28,
        "name": "npc_dota_hero_slardar",
        "localized_name": "Slardar",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Durable", "Initiator", "Disabler", "Escape"],
        "legs": 0
      }, {
        "id": 29,
        "name": "npc_dota_hero_tidehunter",
        "localized_name": "Tidehunter",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Durable", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 30,
        "name": "npc_dota_hero_witch_doctor",
        "localized_name": "Witch Doctor",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 31,
        "name": "npc_dota_hero_lich",
        "localized_name": "Lich",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker"],
        "legs": 2
      }, {
        "id": 32,
        "name": "npc_dota_hero_riki",
        "localized_name": "Riki",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Disabler"],
        "legs": 2
      }, {
        "id": 33,
        "name": "npc_dota_hero_enigma",
        "localized_name": "Enigma",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Disabler", "Jungler", "Initiator", "Pusher"],
        "legs": 0
      }, {
        "id": 34,
        "name": "npc_dota_hero_tinker",
        "localized_name": "Tinker",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Pusher"],
        "legs": 2
      }, {
        "id": 35,
        "name": "npc_dota_hero_sniper",
        "localized_name": "Sniper",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker"],
        "legs": 2
      }, {
        "id": 36,
        "name": "npc_dota_hero_necrolyte",
        "localized_name": "Necrophos",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Durable", "Disabler"],
        "legs": 2
      }, {
        "id": 37,
        "name": "npc_dota_hero_warlock",
        "localized_name": "Warlock",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Initiator", "Disabler"],
        "legs": 2
      }, {
        "id": 38,
        "name": "npc_dota_hero_beastmaster",
        "localized_name": "Beastmaster",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Disabler", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 39,
        "name": "npc_dota_hero_queenofpain",
        "localized_name": "Queen of Pain",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Escape"],
        "legs": 2
      }, {
        "id": 40,
        "name": "npc_dota_hero_venomancer",
        "localized_name": "Venomancer",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Initiator", "Pusher", "Disabler"],
        "legs": 0
      }, {
        "id": 41,
        "name": "npc_dota_hero_faceless_void",
        "localized_name": "Faceless Void",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Initiator", "Disabler", "Escape", "Durable"],
        "legs": 2
      }, {
        "id": 42,
        "name": "npc_dota_hero_skeleton_king",
        "localized_name": "Wraith King",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Support", "Durable", "Disabler", "Initiator"],
        "legs": 2
      }, {
        "id": 43,
        "name": "npc_dota_hero_death_prophet",
        "localized_name": "Death Prophet",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Pusher", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 44,
        "name": "npc_dota_hero_phantom_assassin",
        "localized_name": "Phantom Assassin",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape"],
        "legs": 2
      }, {
        "id": 45,
        "name": "npc_dota_hero_pugna",
        "localized_name": "Pugna",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Nuker", "Pusher"],
        "legs": 2
      }, {
        "id": 46,
        "name": "npc_dota_hero_templar_assassin",
        "localized_name": "Templar Assassin",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Escape"],
        "legs": 2
      }, {
        "id": 47,
        "name": "npc_dota_hero_viper",
        "localized_name": "Viper",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Durable", "Initiator", "Disabler"],
        "legs": 0
      }, {
        "id": 48,
        "name": "npc_dota_hero_luna",
        "localized_name": "Luna",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Pusher"],
        "legs": 2
      }, {
        "id": 49,
        "name": "npc_dota_hero_dragon_knight",
        "localized_name": "Dragon Knight",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Pusher", "Durable", "Disabler", "Initiator", "Nuker"],
        "legs": 2
      }, {
        "id": 50,
        "name": "npc_dota_hero_dazzle",
        "localized_name": "Dazzle",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 51,
        "name": "npc_dota_hero_rattletrap",
        "localized_name": "Clockwerk",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Disabler", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 52,
        "name": "npc_dota_hero_leshrac",
        "localized_name": "Leshrac",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Support", "Nuker", "Pusher", "Disabler"],
        "legs": 4
      }, {
        "id": 53,
        "name": "npc_dota_hero_furion",
        "localized_name": "Nature's Prophet",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Jungler", "Pusher", "Escape", "Nuker"],
        "legs": 2
      }, {
        "id": 54,
        "name": "npc_dota_hero_life_stealer",
        "localized_name": "Lifestealer",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Durable", "Jungler", "Escape", "Disabler"],
        "legs": 2
      }, {
        "id": 55,
        "name": "npc_dota_hero_dark_seer",
        "localized_name": "Dark Seer",
        "primary_attr": "int",
        "attack_type": "Melee",
        "roles": ["Initiator", "Jungler", "Escape", "Disabler"],
        "legs": 2
      }, {
        "id": 56,
        "name": "npc_dota_hero_clinkz",
        "localized_name": "Clinkz",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Escape", "Pusher"],
        "legs": 2
      }, {
        "id": 57,
        "name": "npc_dota_hero_omniknight",
        "localized_name": "Omniknight",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Support", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 58,
        "name": "npc_dota_hero_enchantress",
        "localized_name": "Enchantress",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Jungler", "Pusher", "Durable", "Disabler"],
        "legs": 4
      }, {
        "id": 59,
        "name": "npc_dota_hero_huskar",
        "localized_name": "Huskar",
        "primary_attr": "str",
        "attack_type": "Ranged",
        "roles": ["Carry", "Durable", "Initiator"],
        "legs": 2
      }, {
        "id": 60,
        "name": "npc_dota_hero_night_stalker",
        "localized_name": "Night Stalker",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 61,
        "name": "npc_dota_hero_broodmother",
        "localized_name": "Broodmother",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Pusher", "Escape", "Nuker"],
        "legs": 8
      }, {
        "id": 62,
        "name": "npc_dota_hero_bounty_hunter",
        "localized_name": "Bounty Hunter",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Escape", "Nuker"],
        "legs": 2
      }, {
        "id": 63,
        "name": "npc_dota_hero_weaver",
        "localized_name": "Weaver",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Escape"],
        "legs": 4
      }, {
        "id": 64,
        "name": "npc_dota_hero_jakiro",
        "localized_name": "Jakiro",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Pusher", "Disabler"],
        "legs": 2
      }, {
        "id": 65,
        "name": "npc_dota_hero_batrider",
        "localized_name": "Batrider",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Initiator", "Jungler", "Disabler", "Escape"],
        "legs": 2
      }, {
        "id": 66,
        "name": "npc_dota_hero_chen",
        "localized_name": "Chen",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Jungler", "Pusher"],
        "legs": 2
      }, {
        "id": 67,
        "name": "npc_dota_hero_spectre",
        "localized_name": "Spectre",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Durable", "Escape"],
        "legs": 0
      }, {
        "id": 68,
        "name": "npc_dota_hero_ancient_apparition",
        "localized_name": "Ancient Apparition",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 69,
        "name": "npc_dota_hero_doom_bringer",
        "localized_name": "Doom",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 70,
        "name": "npc_dota_hero_ursa",
        "localized_name": "Ursa",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Jungler", "Durable", "Disabler"],
        "legs": 2
      }, {
        "id": 71,
        "name": "npc_dota_hero_spirit_breaker",
        "localized_name": "Spirit Breaker",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Initiator", "Disabler", "Durable", "Escape"],
        "legs": 2
      }, {
        "id": 72,
        "name": "npc_dota_hero_gyrocopter",
        "localized_name": "Gyrocopter",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 73,
        "name": "npc_dota_hero_alchemist",
        "localized_name": "Alchemist",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Support", "Durable", "Disabler", "Initiator", "Nuker"],
        "legs": 2
      }, {
        "id": 74,
        "name": "npc_dota_hero_invoker",
        "localized_name": "Invoker",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Disabler", "Escape", "Pusher"],
        "legs": 2
      }, {
        "id": 75,
        "name": "npc_dota_hero_silencer",
        "localized_name": "Silencer",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Support", "Disabler", "Initiator", "Nuker"],
        "legs": 2
      }, {
        "id": 76,
        "name": "npc_dota_hero_obsidian_destroyer",
        "localized_name": "Outworld Devourer",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Carry", "Nuker", "Disabler"],
        "legs": 4
      }, {
        "id": 77,
        "name": "npc_dota_hero_lycan",
        "localized_name": "Lycan",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Pusher", "Jungler", "Durable", "Escape"],
        "legs": 2
      }, {
        "id": 78,
        "name": "npc_dota_hero_brewmaster",
        "localized_name": "Brewmaster",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 79,
        "name": "npc_dota_hero_shadow_demon",
        "localized_name": "Shadow Demon",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Initiator", "Nuker"],
        "legs": 2
      }, {
        "id": 80,
        "name": "npc_dota_hero_lone_druid",
        "localized_name": "Lone Druid",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Pusher", "Jungler", "Durable"],
        "legs": 2
      }, {
        "id": 81,
        "name": "npc_dota_hero_chaos_knight",
        "localized_name": "Chaos Knight",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Disabler", "Durable", "Pusher", "Initiator"],
        "legs": 2
      }, {
        "id": 82,
        "name": "npc_dota_hero_meepo",
        "localized_name": "Meepo",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Nuker", "Disabler", "Initiator", "Pusher"],
        "legs": 2
      }, {
        "id": 83,
        "name": "npc_dota_hero_treant",
        "localized_name": "Treant Protector",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Support", "Initiator", "Durable", "Disabler", "Escape"],
        "legs": 2
      }, {
        "id": 84,
        "name": "npc_dota_hero_ogre_magi",
        "localized_name": "Ogre Magi",
        "primary_attr": "int",
        "attack_type": "Melee",
        "roles": ["Support", "Nuker", "Disabler", "Durable", "Initiator"],
        "legs": 2
      }, {
        "id": 85,
        "name": "npc_dota_hero_undying",
        "localized_name": "Undying",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Support", "Durable", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 86,
        "name": "npc_dota_hero_rubick",
        "localized_name": "Rubick",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 87,
        "name": "npc_dota_hero_disruptor",
        "localized_name": "Disruptor",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker", "Initiator"],
        "legs": 2
      }, {
        "id": 88,
        "name": "npc_dota_hero_nyx_assassin",
        "localized_name": "Nyx Assassin",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Disabler", "Nuker", "Initiator", "Escape"],
        "legs": 6
      }, {
        "id": 89,
        "name": "npc_dota_hero_naga_siren",
        "localized_name": "Naga Siren",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Support", "Pusher", "Disabler", "Initiator", "Escape"],
        "legs": 0
      }, {
        "id": 90,
        "name": "npc_dota_hero_keeper_of_the_light",
        "localized_name": "Keeper of the Light",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler", "Jungler"],
        "legs": 2
      }, {
        "id": 91,
        "name": "npc_dota_hero_wisp",
        "localized_name": "Io",
        "primary_attr": "str",
        "attack_type": "Ranged",
        "roles": ["Support", "Escape", "Nuker"],
        "legs": 0
      }, {
        "id": 92,
        "name": "npc_dota_hero_visage",
        "localized_name": "Visage",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Durable", "Disabler", "Pusher"],
        "legs": 2
      }, {
        "id": 93,
        "name": "npc_dota_hero_slark",
        "localized_name": "Slark",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 94,
        "name": "npc_dota_hero_medusa",
        "localized_name": "Medusa",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Disabler", "Durable"],
        "legs": 0
      }, {
        "id": 95,
        "name": "npc_dota_hero_troll_warlord",
        "localized_name": "Troll Warlord",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Pusher", "Disabler", "Durable"],
        "legs": 2
      }, {
        "id": 96,
        "name": "npc_dota_hero_centaur",
        "localized_name": "Centaur Warrunner",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Durable", "Initiator", "Disabler", "Nuker", "Escape"],
        "legs": 4
      }, {
        "id": 97,
        "name": "npc_dota_hero_magnataur",
        "localized_name": "Magnus",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Disabler", "Nuker", "Escape"],
        "legs": 4
      }, {
        "id": 98,
        "name": "npc_dota_hero_shredder",
        "localized_name": "Timbersaw",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Nuker", "Durable", "Escape"],
        "legs": 2
      }, {
        "id": 99,
        "name": "npc_dota_hero_bristleback",
        "localized_name": "Bristleback",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Durable", "Initiator", "Nuker"],
        "legs": 2
      }, {
        "id": 100,
        "name": "npc_dota_hero_tusk",
        "localized_name": "Tusk",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 101,
        "name": "npc_dota_hero_skywrath_mage",
        "localized_name": "Skywrath Mage",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler"],
        "legs": 2
      }, {
        "id": 102,
        "name": "npc_dota_hero_abaddon",
        "localized_name": "Abaddon",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Support", "Carry", "Durable"],
        "legs": 2
      }, {
        "id": 103,
        "name": "npc_dota_hero_elder_titan",
        "localized_name": "Elder Titan",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Initiator", "Disabler", "Nuker", "Durable"],
        "legs": 2
      }, {
        "id": 104,
        "name": "npc_dota_hero_legion_commander",
        "localized_name": "Legion Commander",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
        "legs": 2
      }, {
        "id": 105,
        "name": "npc_dota_hero_techies",
        "localized_name": "Techies",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Nuker", "Disabler"],
        "legs": 6
      }, {
        "id": 106,
        "name": "npc_dota_hero_ember_spirit",
        "localized_name": "Ember Spirit",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Nuker", "Disabler", "Initiator"],
        "legs": 2
      }, {
        "id": 107,
        "name": "npc_dota_hero_earth_spirit",
        "localized_name": "Earth Spirit",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Nuker", "Escape", "Disabler", "Initiator", "Durable"],
        "legs": 2
      }, {
        "id": 108,
        "name": "npc_dota_hero_abyssal_underlord",
        "localized_name": "Underlord",
        "primary_attr": "str",
        "attack_type": "Melee",
        "roles": ["Support", "Nuker", "Disabler", "Durable", "Escape"],
        "legs": 2
      }, {
        "id": 109,
        "name": "npc_dota_hero_terrorblade",
        "localized_name": "Terrorblade",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Pusher", "Nuker"],
        "legs": 2
      }, {
        "id": 110,
        "name": "npc_dota_hero_phoenix",
        "localized_name": "Phoenix",
        "primary_attr": "str",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Initiator", "Escape", "Disabler"],
        "legs": 2
      }, {
        "id": 111,
        "name": "npc_dota_hero_oracle",
        "localized_name": "Oracle",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler", "Escape"],
        "legs": 2
      }, {
        "id": 112,
        "name": "npc_dota_hero_winter_wyvern",
        "localized_name": "Winter Wyvern",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Disabler", "Nuker"],
        "legs": 2
      }, {
        "id": 113,
        "name": "npc_dota_hero_arc_warden",
        "localized_name": "Arc Warden",
        "primary_attr": "agi",
        "attack_type": "Ranged",
        "roles": ["Carry", "Escape", "Nuker"],
        "legs": 2
      }, {
        "id": 114,
        "name": "npc_dota_hero_monkey_king",
        "localized_name": "Monkey King",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Escape", "Disabler", "Initiator"],
        "legs": 2
      }, {
        "id": 119,
        "name": "npc_dota_hero_dark_willow",
        "localized_name": "Dark Willow",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler", "Escape"],
        "legs": 2
      }, {
        "id": 120,
        "name": "npc_dota_hero_pangolier",
        "localized_name": "Pangolier",
        "primary_attr": "agi",
        "attack_type": "Melee",
        "roles": ["Carry", "Nuker", "Disabler", "Durable", "Escape", "Initiator"],
        "legs": 2
      }, {
        "id": 121,
        "name": "npc_dota_hero_grimstroke",
        "localized_name": "Grimstroke",
        "primary_attr": "int",
        "attack_type": "Ranged",
        "roles": ["Support", "Nuker", "Disabler", "Escape"],
        "legs": 2
      }];

      var x;

      if (id >= 1 && id <= 24) {
        x = id - 1;
      } else
      if (id >= 25 && id <= 114) {
        x = id - 2;
      } else
      if (id >= 119 && id <= 121) {
        x = id - 6;
      } else {
        x = null;
      }

      return $data_[x];
    }
  }
}

window.onload = () => {
  KM.init['nav']();
  M.AutoInit();
}