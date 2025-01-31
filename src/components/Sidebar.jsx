import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({initialMenuItems}) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
    if(newMenuItem){
      setMenuItems((items) => [newMenuItem,... items]) // vice versa makes this act chaotically, makes page blank
      setNewMenuItem("")
    }
  }, [newMenuItem])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  let userFilter = menuItems.filter(item => item.match(new RegExp(filter, "i")));
  // The more manual version using i completely breaks it, hence I summed it up in RegExp
  // Below is the original loop, now commented out.
  /*
    for(let i = 0; i < menuItems.length; i++){
      if(menuItems[i].toLowerCase().includes(filter.toLowerCase())){
        // get item/text to lowercase with JS, and checks
        userFilter.push(menuItems[i]); // Adds, via the push command
      }
    }
  */

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <ul>
        {/* Originally here, I used initialMenuItems, I removed it later onwards for userFilter*/}
        {userFilter.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          addMenuItem()
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}

