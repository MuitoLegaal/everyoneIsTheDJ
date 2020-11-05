export default function(voteTimer=0, action){
    if(action.type == 'setTime'){
        var voteTimerCopy = voteTimer;
        voteTimerCopy = action.timer
      return voteTimerCopy
  } else {
      return voteTimer
  }
  }