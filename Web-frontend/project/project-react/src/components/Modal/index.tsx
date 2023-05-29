import { ReactNode, useState, useEffect } from "react"
import "./index.less"
interface ModalProps {
  visible: boolean
  maskCloseAble: boolean
  destroyOnClose?: boolean
  mask?: boolean
  width?: string
  title?: string
  closeAble: boolean
  bodyStyle?: object
  maskStyle?: object
  children?: ReactNode
  footer?: ReactNode
  okText?: string
  cancelText?: string
  onCancel?: () => void
  onOk?: () => void
  afterClose?: () => void
}
let hiddenCount = 0 //避免其他使用modal组件的函数的影响。
const Modal = (props: ModalProps) => {
  const {
    visible,
    maskCloseAble,
    mask,
    width,
    title,
    closeAble,
    bodyStyle,
    maskStyle,
    children,
    footer,
    okText,
    cancelText,
    onCancel,
    onOk,
    afterClose,
    destroyOnClose,
  } = props
const [destroyOnChild,setDestroyChild]=useState(false)
  const handleClose = () => {
    if (destroyOnClose) {
      setDestroyChild(true)
    }
    onCancel && onCancel()
  }
  const closeModal = function (event: unknown) {
    const e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode === 27) {
      handleClose()
    }
  }
  useEffect(() => {
    if (!visible && hiddenCount) {
      hiddenCount = 0
      afterClose && afterClose()
    }
    hiddenCount = 1
    if (visible) {
      // 更新时，重新渲染子组件
      setDestroyChild(false)
    }
  }, [visible])

  useEffect(() => {
    document.addEventListener("keydown", closeModal, false)
    return () => {
      document.removeEventListener("keydown", closeModal, false)
    }
  }, [])

  return (
    <>
      <div
        className="m-modal-wrap"
        style={{ display: visible ? "block" : "none" }}
      >
        {destroyOnChild ? null : (
          <div className="m-modal-content" style={{ width }}>
            <div className="m-modal-header">
              <div className="m-modal-title">{title}</div>
            </div>
            {closeAble && (
              <span
                className="m-modal-close"
                onClick={() => {
                  handleClose()
                }}
              >
                X
              </span>
            )}
            <div className="m-modal-body" style={bodyStyle}>
              {children}
            </div>
            <div className="m-modal-footer">
              {footer === null ? null : (
                <div className="m-modal-footer-btn">
                  <button>{cancelText}</button>
                  <button>{okText}</button>
                </div>
              )}
            </div>
          </div>
        )}
        {mask && (
          <div
            className="m-modal-mask"
            style={maskStyle}
            onClick={() => {
              maskCloseAble && handleClose()
            }}
          ></div>
        )}
      </div>
    </>
  )
}

export default Modal
