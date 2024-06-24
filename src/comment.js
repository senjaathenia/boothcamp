import React from "react";
import { faker } from '@faker-js/faker';
export const Comment = () => {
    return (
        <div class="ui comments">
            <h3 class="ui dividing header">Comments</h3>
            <div class="comment">
                <a class="avatar">
                    <img src= {faker.image.avatar()} alt="">
                    </img></a>
                <div class="content">
                    <a class="author">Gintoki</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        How artistic!
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                </div>
            </div>
            <div class="comment">
                <a class="avatar">
                    <img src={faker.image.avatar()} alt="">
                    </img>
                </a>
                <div class="content">
                    <a class="author">Kagura</a>
                    <div class="metadata">
                        <span class="date">Yesterday at 12:30AM</span>
                    </div>
                    <div class="text">
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                </div>
                <div class="comments">
                    <div class="comment">
                        <a class="avatar">
                            <img src= {faker.image.avatar()} alt = "">
                            </img>
                        </a>
                        <div class="content">
                            <a class="author">Shinpachi</a>
                            <div class="metadata">
                                <span class="date">Just now</span>
                            </div>
                            <div class="text">
                                Kagura you are always so right :
                            </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment">
                <a class="avatar">
                    <img src="../img/sadaharu.jpg">
                    </img>
                    
                </a>
                <div class="content">
                    <a class="author">Sadaharu</a>
                    <div class="metadata">
                        <span class="date">5 days ago</span>
                    </div>
                    <div class="text">
                        Dude, this is awesome. Thanks so much
                    </div>
                    <div class="actions">
                        <a class="reply">Reply</a>
                    </div>
                </div>
            </div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui blue labeled submit icon button">
                    <i class="icon edit"></i> Add Reply
                </div>
            </form>
        </div>
    );
};
 export default Comment;