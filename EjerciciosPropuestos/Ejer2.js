function voutesCounting(votes){
    let counting = Array(votes.length).fill(0);
    for(idx in votes){
        counting [votes[idx]]++;
    }
    let maxVotes = 0;
    let winnerID = 0;
    for(id in counting){
        if(counting[id] > maxVotes){
            maxVotes = counting[id];
            winnerID = id;
        }
    }
    return {id: winnerID, votes: maxVotes};
}

let votes = [0,0,0,0,0,0,0,0,1,2,2,2,2,1,1,1,1,1,1,1,1,1,3,2];
console.log(voutesCounting(votes));