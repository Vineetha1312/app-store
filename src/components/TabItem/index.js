import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabId = isActive ? 'active-tab-btn' : ''

  return (
    <>
      <li className="tab-item-container">
        <button
          type="button"
          className={`button ${activeTabId}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
      <br />
    </>
  )
}
export default TabItem
