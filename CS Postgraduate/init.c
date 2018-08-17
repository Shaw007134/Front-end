ADT Triplet {

  //init triple tuple with v1, v2, v3
  InitTriplet(&T, v1, v2, v3)

  //destroy triple tuple
  DestroyTriplet(&T)

  //use e to return the i th value in T
  Get(T, i, &e)

  //change the value of i to e
  Put(&T, i, e)

  //ordered by ascending, return 1, else return 0
  IsAscending(T)

  //ordered by descending, return 1, else return 0
  IsDescending(T)

  //return the max element
  Max(T, &e)

  //return the min element
  Min(T, &e)
}ADT Triplet

