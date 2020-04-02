import React, {useState, useEffect} from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(1);
    const [isClose, setClose] = useState(true);
    const [str, setStr] = useState('解绑');
    useEffect(()=>{
        document.title = 'test' + like
        return ()=> {
            setStr(str + like)
        }
    }, [isClose === true]);
    const changeLike = (): void => {
        setLike(like + 1)
    };
    const changeSet = ():void => {
        setClose(!isClose)
    };
    return (
        <>
            <button onClick={changeLike}> 按钮{like} </button>

            <button onClick={changeSet}> {isClose? 'on': 'off'} </button>

            <span> {str}</span>
        </>
    )
};
export default LikeButton
