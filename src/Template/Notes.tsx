import React, { createRef, useState } from 'react';
import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import widgets from '../components/Widgets';
import tools from '../components/Tools';
import { addOutline, close, readerOutline } from 'ionicons/icons';
import './TemplatePage.css';
import './Note.css';


class Notes{
    addNote(value:any,newValue:any){
        var Data = [];;
        for (var item of value){Data.push(item)}
        Data.push(newValue);
        return Data;
    }
    DisplayNotePopUp(data:any){
        return(
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if (data.dismiss){data.dismiss(false)}}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">My Note</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            if (data.dismiss){data.dismiss(false)}
                        }} class="back-close back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <span className="noteMsgSubject">Subject:</span>
                    <IonLabel class="displayNoteSubject">{data.note[0]}</IonLabel>
                </IonItem>
                <IonContent>
                    <div className="displayNoteMsgContainer">
                        <span className="displayNoteMsg">message:</span>
                        <div className="displayNoteMsgSubContainer">
                            <p>{data.note[1]}</p>
                        </div>
                    </div>
                </IonContent>
                <IonItem>
                    <IonButton slot="end" onClick={()=>{if (data.dismiss){data.dismiss(false)}}}>Close</IonButton>
                </IonItem>
            </IonModal>
        )
    }

    AddNote(data:any){
        const [note_subject,set_note_subject] = useState("");
        const [note_message,set_note_message] = useState("");
        var noteScrollRef = createRef<HTMLIonContentElement>();
        return(
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if (data.dismiss){data.dismiss(false)}}} 
                onDidPresent={()=>{set_note_subject("");set_note_message("");tools.clickById("stop-loader");}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Add Note</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            if (data.dismiss){data.dismiss(false)}
                        }} class="back-close back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent scrollEvents={true} ref={noteScrollRef}>
                    <div className="textAreaContainer">
                        <IonInput class="textSubject" placeholder="Subject" onIonChange={(e)=>{
                            if (e.detail.value){set_note_subject(e.detail.value)};
                        }} value={note_subject}/>
                        <IonTextarea rows={10} class="textArea" onIonChange={(e)=>{
                            if (e.detail.value){set_note_message(e.detail.value)};
                        }} placeholder="Place your text here" value={note_message}/>
                        <widgets.textConfigureWidgets imoji={(e:any)=>{
                            console.log(e)
                            set_note_message(note_message+e.emoji)
                        }} IDS={[]} onOpen={(e:any)=>{if (e){noteScrollRef.current?.scrollToBottom()}}}/>
                    </div>
                </IonContent>
                <IonItem>
                    <IonButton slot="end" onClick={()=>{
                        if (!note_subject && !note_message){
                            tools.toast("You must provide a valide subject and message");
                        }else if (!note_subject){
                            tools.toast("Must provide subject");
                        }else if (!note_message){
                            tools.toast("must provide message");
                        }else{
                            if (data.get){data.get(note.addNote(data.value,[note_subject,note_message]))}
                            if (data.dismiss){data.dismiss(false)}
                        }
                    }}>Save</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    show(data:any){
        const [openAddNote, setOpenAddNote] = useState(false);
        const [openDisplayNote, setOpenDisplayNote] = useState(false);
        const [notes, setNotes] = useState([] as any[]);
        const [showANote, setShowANote] = useState([] as any[]);
        return (
            <>
                <IonContent hidden={!data.state}>
                    <note.AddNote isOpen={openAddNote} dismiss={()=>{setOpenAddNote(false)}} get={(e:any)=>{setNotes(e)}} value={notes}/>
                    <note.DisplayNotePopUp note={showANote} isOpen={openDisplayNote} dismiss={()=>{setOpenDisplayNote(false)}}/>
                    {
                        notes.length?
                        notes.map((note, index)=>
                            <IonItem class="noteMsgContainer noteMsgHover" key={index} onClick={()=>{
                                setShowANote(note);
                                setOpenDisplayNote(true);
                            }}>
                                <IonIcon class="noteIcon" icon={readerOutline}/>
                                <span className="noteMsgSubject">Note:</span><span className="noteMsg">{index+1}</span>
                                <span className="noteMsgSubject1">subject:</span><span className="noteMsg">{note[0]}</span>
                                <span className="noteMsgSubject1">message:</span><IonLabel class="noteMsg">{note[1]}</IonLabel>
                            </IonItem>
                        ):
                        <IonItem onClick={()=>{
                            tools.clickById("start-loader");
                            setTimeout(()=>{setOpenAddNote(true)},100);
                        }}>
                            <IonIcon class="noteIcon" icon={readerOutline}/>
                            <span className="noItemText noItemTextHover">Click to add note</span>
                        </IonItem>
                    }
                </IonContent>
                
                <IonCard hidden={!data.state} class="addButtonContainer" onClick={()=>{
                    tools.clickById("start-loader");
                    setTimeout(()=>{setOpenAddNote(true)},100);
                }}>
                    <IonIcon class="AddButtonIcon" icon={addOutline}/>
                </IonCard>
            </>
        )
    }
}

export var note = new Notes();

