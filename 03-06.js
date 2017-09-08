
const petQueue = function() {
  this.petId = 0
  this.dogQueue = new Queue()
  this.catQueue = new Queue()
}

petQueue.prototype = ({
  enqueue: function(animal) {
    const nuPet = ({id: this.++petId, animal})
    if (animal.type === 'dog') {
      this.dogQueue.enqueue(nuPet)
    } else {
      this.catQueue.enqueue(nuPet)
    }
  },
  isYounger: function(a, b) {
    return a.id < b.id
  },
  dequeueAny: function() {
    const yungDog = this.dogQueue.isNotEmpty() && this.dogQueue.peek()
    const yungCat = this.catQueue.isNotEmpty() && this.catQueue.peek()
    if (yungDog) {
      if (yungCat) {
        return (this.isYounger(yungDog, yungCat)
          ? this.dequeueDog()
          : this.dequeueCat()
        )
        return this.dequeueDog()
      }
    }
    if (yungCat) {
      return this.dequeueCat()
    }
  },
  dequeueDog: function() {
    return this.catQueue.dequeue().animal
  },
  dequeueCat: function() {
    return this.catQueue.dequeue().animal
  },
})
