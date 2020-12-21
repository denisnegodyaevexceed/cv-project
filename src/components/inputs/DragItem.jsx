import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import allCustomizedTemplateActions from '../../actions/customizedTemplateActions';


const DragItem = ({id, renderContent, gsw = 1, gsh = 1}) => {
    const {posVertical, textAlign, activeBlock} = useSelector(state=>state.customizedTemplateReducer);
    const [newStyle, setNewStyle] = useState({
        display: "flex",
        textAlign: textAlign,
        alignItems: posVertical,
    });
    const useStyles = makeStyles((theme) => ({
        root: newStyle,
    }));
    const classes = useStyles();
    const {setActiveBlockAction, setVerticalPosAction, setTextAlignAction} = allCustomizedTemplateActions;
    const dispatch = useDispatch();

    

    const updateStyleVer = () => {
        if(id === activeBlock){
            setNewStyle({
                ...newStyle,
                alignItems: posVertical,
            })
        }
    }
    
    const updateStyleText = () => {
        if(id === activeBlock){
            setNewStyle({
                ...newStyle,
                textAlign: textAlign,
            })
        }
    }

    useEffect(() => { 

        updateStyleVer();
       
    }, [posVertical]);

    useEffect(() => {
        updateStyleText();
      
    }, [textAlign]);    

    const handleClickItem = () => {
        console.log(newStyle)
        dispatch(setActiveBlockAction(id));
        dispatch(setVerticalPosAction(newStyle.alignItems));
        dispatch(setTextAlignAction(newStyle.textAlign));
}

    return (
        <div className="grid-stack-item" gs-w={gsw} gs-h={gsh} onMouseDown={() => handleClickItem()}>
            <div className={`${classes.root} ${activeBlock === id ? 'active-block' : '' } grid-stack-item-content`}
            >{renderContent}</div>
        </div>
    );
};



export default DragItem