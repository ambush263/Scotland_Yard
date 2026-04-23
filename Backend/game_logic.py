class Player:
    def __init__(self,type,position):
        self.type = type
        self.position = position
        if type != "mrX":
            self.tic_dict = {"taxi":{"cost":1,"nos":10},
                         "bus":{"cost":3,"nos":8},
                         "under":{"cost":5,"nos":4}}
            
        else:
            self.tic_dict = {"taxi":{"cost":1,"nos":4},
                         "bus":{"cost":3,"nos":3},
                         "under":{"cost":5,"nos":3},
                         "black":{"cost":7,"nos":5},}
            
def is_valid_move(player:Player,map:dict,next:int) -> bool:
    tickets = player.tic_dict
    if next in map[player.position] and tickets[map[player.position][next]]["nos"] > 0:
        return True
    else:
         return False
    
def move(player:Player,map:dict,next:int) -> None:
    if is_valid_move(player,map,next):
        transport = map[player.position][next]
        player.position = next
        player.tic_dict[transport]["nos"] -= 1