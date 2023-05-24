import { useState } from "react"
import "./App.css"
import Modal from "./components/Modal"
function App() {
  const [isShow, setIsShow] = useState(false)
  const handleOpen = () => {
    setIsShow(true)
  }
  const handleOk = () => {
    setIsShow(false)
    console.log("handleOk")
  }
  const handleCancel = () => {
    setIsShow(false)
    console.log("handleCancel")
  }
  const handleafterClose = () => {
    console.log("handleafterClose")
  }

  return (
    <>
      <button
        onClick={() => {
          handleOpen()
        }}
      >
        Modal
      </button>
      <Modal
        mask
        destroyOnClose
        maskCloseAble={false}
        visible={isShow}
        title="Modal 框"
        width={"800px"}
        closeAble
        onCancel={handleCancel}
        onOk={handleOk}
        bodyStyle={{ color: "red" }}
        footer={undefined}
        okText={"确定"}
        cancelText={"取消"}
        afterClose={handleafterClose}
      >
        <p>我是弹窗内容</p>
        <p>我是弹窗内容</p>
        <p>我是弹窗内容</p>
        <p>我是弹窗内容</p>
      </Modal>
    </>
  )
}

export default App
