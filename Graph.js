function MinHeap() {
    this.data = [];
  }
  
  MinHeap.prototype.insert = function(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length-1);
  };
  
  MinHeap.prototype.bubbleUp = function(index) {
    while (index > 0) {
      // get the parent
      var parent = Math.floor((index + 1) / 2) - 1;
      
      // if parent is greater than child
      if (this.data[parent][1] > this.data[index][1]) {
        // swap
        var temp = this.data[parent];
        this.data[parent] = this.data[index];
        this.data[index] = temp;
      }
      
      index = parent;
    }
  };
  
  MinHeap.prototype.extractMin = function() {
    var min = this.data[0];
    
    // set first element to last element
    if(this.data.length==1){
        return this.data.pop();
    }

    this.data[0] = this.data.pop();

    this.bubbleDown(0);
    return min;
  };
  
  MinHeap.prototype.bubbleDown = function(index) {
    while (true) {
      var child = (index+1)*2;
      var sibling = child - 1;
      var toSwap = null;
      
      // if current is greater than child
      if(child>=this.data.length){
          break;
      }
      if (this.data[index][1] > this.data[child][1]) {
        toSwap = child;
      }
      
      // if sibling is smaller than child, but also smaller than current
      if (this.data[index][1] > this.data[sibling][1] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling][1] < this.data[child][1]))) {
          toSwap = sibling;
      }
      
      // if we don't need to swap, then break.
      if (toSwap == null) {
        break;
      }
      
      var temp = this.data[toSwap];
      this.data[toSwap] = this.data[index];
      this.data[index] = temp;
      
      index = toSwap;
    }
  };    
  
  MinHeap.prototype.isEmpty = function(){
      return this.data.length==0
  }

class familyGraph{
    constructor(name){
        this.graph = new Map()
        this.graph.set(name,[])
    }
    addMember(name,x,relative,y){
        this.graph.set(name,[[relative,y]])
        for (let i of this.graph.get(relative)){
            if(i[1]=="Father"){
                if(x=="Brother"){
                    this.graph.get(name).push([i[0],"Father"])
                    this.graph.get(i[0]).push([name,"Son"])
                }
                else if(x=="Sister"){
                    this.graph.get(name).push([i[0],"Father"])
                    this.graph.get(i[0]).push([name,"Daughter"])
                }
            }
            else if(i[1]=="Mother"){
                if(x=="Brother"){
                    this.graph.get(name).push([i[0],"Mother"])
                    this.graph.get(i[0]).push([name,"Son"])
                }
                else if(x=="Sister"){
                    this.graph.get(name).push([i[0],"Mother"])
                    this.graph.get(i[0]).push([name,"Daughter"])
                }
            }
            else if(i[1]=="Husband"){
                if(x=="Son"){
                    this.graph.get(name).push([i[0],"Father"])
                    this.graph.get(i[0]).push([name,"Son"])
                }
                else if(x=="Daughter"){
                    this.graph.get(name).push([i[0],"Father"])
                    this.graph.get(i[0]).push([name,"Daughter"])
                }
            }
            else if(i[1]=="Wife"){
                if(x=="Son"){
                    this.graph.get(name).push([i[0],"Mother"])
                    this.graph.get(i[0]).push([name,"Son"])
                }
                else if(x=="Daughter"){
                    this.graph.get(name).push([i[0],"Mother"])
                    this.graph.get(i[0]).push([name,"Daughter"])
                }
            }
            else if(i[1]=="Brother"){
                if(x=="Father"){
                    this.graph.get(name).push([i[0],"Son"])
                    this.graph.get(i[0]).push([name,"Father"])
                }
                if(x=="Mother"){
                    this.graph.get(name).push([i[0],"Son"])
                    this.graph.get(i[0]).push([name,"Mother"])
                }
                if(x=="Brother"){
                    this.graph.get(name).push([i[0],"Brother"])
                    this.graph.get(i[0]).push([name,"Brother"])
                }
                else if(x=="Sister"){
                    this.graph.get(name).push([i[0],"Brother"])
                    this.graph.get(i[0]).push([name,"Sister"])
                }
            }
            else if(i[1]=="Sister"){
                if(x=="Father"){
                    this.graph.get(name).push([i[0],"Daughter"])
                    this.graph.get(i[0]).push([name,"Father"])
                }
                if(x=="Mother"){
                    this.graph.get(name).push([i[0],"Daughter"])
                    this.graph.get(i[0]).push([name,"Mother"])
                }
                if(x=="Brother"){
                    this.graph.get(name).push([i[0],"Sister"])
                    this.graph.get(i[0]).push([name,"Brother"])
                }
                else if(x=="Sister"){
                    this.graph.get(name).push([i[0],"Sister"])
                    this.graph.get(i[0]).push([name,"Sister"])
                }
            }
            else if(i[1]=="Son"){
                if(x=="Husband"){
                    this.graph.get(name).push([i[0],"Son"])
                    this.graph.get(i[0]).push([name,"Father"])
                }
                else if(x=="Wife"){
                    this.graph.get(name).push([i[0],"Son"])
                    this.graph.get(i[0]).push([name,"Mother"])
                }
                if(x=="Son"){
                    this.graph.get(name).push([i[0],"Brother"])
                    this.graph.get(i[0]).push([name,"Brother"])
                }
                if(x=="Daughter"){
                    this.graph.get(name).push([i[0],"Brother"])
                    this.graph.get(i[0]).push([name,"Sister"])
                }
            }
            if(i[1]=="Daughter"){
                if(x=="Husband"){
                    this.graph.get(name).push([i[0],"Son"])
                    this.graph.get(i[0]).push([name,"Father"])
                }
                else if(x=="Wife"){
                    this.graph.get(name).push([i[0],"Son"])
                    this.graph.get(i[0]).push([name,"Father"])
                }
                if(x=="Son"){
                    this.graph.get(name).push([i[0],"Sister"])
                    this.graph.get(i[0]).push([name,"Brother"])
                }
                if(x=="Daughter"){
                    this.graph.get(name).push([i[0],"Sister"])
                    this.graph.get(i[0]).push([name,"Sister"])
                }
            }
        }
        this.graph.get(relative).push([name,x])
    }
    print(){
        console.log(this.graph)
    }
    showpath(parent,j){
        var s;
        if(parent.get(j)==-1){
            return s;
        }
        s = this.showpath(parent,parent.get(j))
        var t = this.graph.get(parent.get(j)).find(element=> element[0]==j)[1]
        if(s!=undefined){
            return s+" "+t;
        }
        return t;
    }
    shortestPath(from,to){
        let pq = new MinHeap()
        pq.insert([from,0])
        let dist = new Map()
        let parent = new Map()
        parent.set(from,-1)
        for(let i of this.graph)
            dist.set(i[0],1000)
        dist.set(from,0)
        while(!pq.isEmpty()){
            let u = pq.extractMin()
            for(let i of this.graph.get(u[0])){
                if(dist.get(i[0])> dist.get(u[0])+1){
                    dist.set(i[0],dist.get(u[0]) + 1);
                    parent.set(i[0],u[0]);
                    pq.insert([i[0],dist[i[0]]]);
                }
            }
        }
        return this.showpath(parent,to)
    }
    returnGraph(){
        return this.graph
    }
}

module.exports = familyGraph