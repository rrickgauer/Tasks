

class Common {

    static displayAlert(message) {
        $.toast({
            text: message,
            position: 'bottom-center',
            loader: false,
            bgColor: '#3D3D3D',
            textColor: 'white'
        });
    }
}



