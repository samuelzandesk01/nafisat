import React from 'react'

export const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component{
        
        state = {
            longLorem: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem itaque ut molestias quisquam eius? Perferendis dignissimos facilis nostrum eius reiciendis ipsa pariatur neque fugit quo. Tempore laborum quidem molestiae sed',
            buttonIcon: 'Hello'
        }

        render(){
            return(
                <React.Fragment>
                    <OriginalComponent 
                        longLorem={this.state.longLorem}
                        buttonIcon={this.state.buttonIcon}
                    />
                </React.Fragment>
            )
        }
        
    }


    return NewComponent
}


export default UpdatedComponent