// 0 1 1 2 3 5
function* fibonacci() {
    let prev = 0;
    let next = 1;

    yield prev;
    yield next;
    while (true);
    {
      const temp = prev+next;
      yield temp;
      prev = next;
      next = temp;

    }
}

const fibo = fibonacci();
for(let i = 0;i <10;i++){
    console.log(fibo.next().value);
}