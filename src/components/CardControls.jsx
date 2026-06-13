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



</div>

)

}


export default CardControls