// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  const good_count = x.filter(ele => ele == 'good').length
  return good_count < 1 ? 'Fail!' :
         good_count < 3 ? 'Publish!' : 'I smell a series!'
}

function well(x){
  const ideas = {}
  x.forEach(idea => {
    ideas[idea] = ideas[idea]+1 || 1 ;
  })
  if( ideas['good'] >=1 && ideas['good'] < 3) return 'Publish!'
  else if(ideas['good'] >= 3) return 'I smell a series!'
  else return 'Fail!'
  console.log(ideas)
}