const { useState, useEffect } = React
import { eventBusService } from '../services/event-bus.service.js'

export function UserMsg() {
    const [msg, setMsg] = useState(null)
    //{ txt: 'Success', type: 'success' }

    useEffect(() => {
        eventBusService.on('show-user-msg', (msg) => {
            setMsg(msg)
            setTimeout(onClose, 1500)
        })
    }, [])

    function onClose() {
        setMsg(null)
    }
    if (!msg) return
    return (
        <section className={'user-msg ' + msg.type}>
            <p>{msg.txt}</p>
        </section>
    )
}
