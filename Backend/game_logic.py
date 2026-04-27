import json
import os
from random import randint
# Load GRAPH from JSON file
_graph_path = os.path.join(os.path.dirname(__file__), "GRAPH.json")
with open(_graph_path, "r") as f:
    _raw = json.load(f)
 
# Convert all keys to int (JSON keys are always strings)
GRAPH = {
    int(node): {int(neighbor): transports for neighbor, transports in edges.items()}
    for node, edges in _raw.items()
}
class Game:
    def __init__(self,player_list,graph):
        self.players = player_list
        self.GRAPH = graph
        self.round = 0
        self.active_player_index = "mrX"
        self.mrx_history = []
        self.reveal = [3,8,12,17,22]
        self.winner = None
    def start_game(self):
        return start_game(self.players,self.graph)
    def attempt_move(self,name,transport):
        pass

class Player:
    def __init__(self,name,type,position):
        self.type = type
        self.position = position
        self.name = name
        if type != "mrX":
            self.tic_dict = {"taxi":{"cost":1,"nos":10},
                         "bus":{"cost":3,"nos":8},
                         "under":{"cost":5,"nos":4}}
            
        else:
            self.tic_dict = {"taxi":{"cost":1,"nos":4},
                         "bus":{"cost":3,"nos":3},
                         "under":{"cost":5,"nos":3},
                         "black":{"cost":7,"nos":5},}
    def __repr__(self):
        return f"Player({self.name}, {self.type}, pos={self.position})"
 
    def to_dict(self) -> dict:
        return {
            "name": self.name,
            "type": self.type,
            "position": self.position,
            "tic_dict": self.tic_dict,
        }

def is_valid_move(player:Player,map:dict,next:int,next_trans:str) -> bool:
    tickets = player.tic_dict
    if next in map[player.position] and next_trans in map[player.position][next] and tickets[next_trans]["nos"] > 0:
        return True
    else:
         return False
    
def execute_move(player:Player,player_list,map:dict,next:int,transport:str) -> None:
    if is_valid_move(player,map,next,transport):
        for p in player_list:
            if p.name == "mrX":
                p.tic_dict[transport]["nos"] += 1

        player.tic_dict[transport]["nos"] -=1
        player.position = next


def start_game(player_list,GRAPH):
    mrX_pos = randint(0,len(player_list)-1)
    for i,p in enumerate(player_list):
        if i == mrX_pos:
            p.type = "mrX"
        else:
            p.type = "detective"
    
    n = len(GRAPH)
    for p in player_list:
        p.position = randint(0,n-1)

    return get_game_state(player_list)
            
def get_game_state(player_list)->dict:
    game_state = {}
    for p in player_list:
        game_state[p.name] = p.to_dict()
    return game_state