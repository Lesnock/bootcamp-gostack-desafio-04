import React, { Component } from 'react';

// Styles
import '../css/post.css'

// Components
import Post from './Post'

export default class PostList extends Component {
    
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Julio Alcantara',
                    avatar: 'http://localhost:8080/images/avatar@2x.png'
                },
                date: '04 Jun 2019',
                content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Diego Fernandes',
                            avatar: 'http://localhost:8080/images/profile@2x.png',
                        },
                        content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: 'Julio Alcantara',
                    avatar: 'http://localhost:8080/images/avatar@2x.png'
                },
                date: '04 Jun 2019',
                content: `Fala galera, beleza\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Clara Lisboa',
                            avatar: 'http://localhost:8080/images/clara@2x.png',
                        },
                        content: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Cézar Toledo',
                            avatar: 'http://localhost:8080/images/l.jpg',
                        },
                        content: 'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!'
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: 'Julio Alcantara',
                    avatar: 'http://localhost:8080/images/avatar@2x.png'
                },
                date: '04 Jun 2019',
                content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Diego Fernandes',
                            avatar: 'http://localhost:8080/images/profile@2x.png',
                        },
                        content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                    }
                ]
            },
        ]
    }

    render() {
        return (
            <div className="post-list">

                {this.state.posts.map(post => (
                    <Post
                        key={post.id}
                        name={post.author.name}
                        date={post.date}
                        avatar={post.author.avatar}
                        content={post.content}
                        comments={post.comments}
                    ></Post>
                ))}
            </div>
        )
    }
}
