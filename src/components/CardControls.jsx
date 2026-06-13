function CardControls({settings,setSettings}){


return (

<div>


<label>
Width
</label>

<input
value={settings.width}
onChange={(e)=>
setSettings({
...settings,
width:e.target.value
})
}
/>



<label>
Background
</label>

<input
type="color"

value={settings.background}

onChange={(e)=>
setSettings({
...settings,
background:e.target.value
})
}
/>

<input

value={settings.height}

onChange={(e)=>
setSettings({
...settings,
height:e.target.value
})
}

/>


<input

type="range"

min="0"
max="50"

value={parseInt(settings.radius)}

onChange={(e)=>
setSettings({
...settings,
radius:e.target.value+"px"
})
}

/>


<input
type="checkbox"

onChange={(e)=>

setSettings({

...settings,

shadow:e.target.checked 
?
"0px 10px 20px gray"
:
"none"

})

}
/>






</div>

)

}


export default CardControls