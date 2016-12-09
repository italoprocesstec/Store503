jQuery(document).ready( function(){
    var $form = jQuery('#form-newsletter');
    $form.submit( function(){
        var $this  = jQuery(this);
        var $email = $this.find('.email');
        var $nome  = $this.find('.nome');
        var api_url    = 'http://api2.getresponse.com';
        var api_key    = 'd35b300c5ceaf29849bdcb9ab9dd702f';


        jQuery.ajax({
            url     : api_url,
            data    : JSON.stringify({
                'jsonrpc'   : '2.0',
                'method'    : 'get_campaigns',
                'params'    : [
                    api_key,
                    {
                        'name' : { 'EQUALS' : 'marketing_189850' }
                    }
                ],
                'id'        : 1
            }),
            type        : 'POST',
            contentType : 'application/json',
            dataType    : 'JSON',
            crossDomain : true,
            async       : false,
            success     : function(response) {
                campaigns = response.result;
            }
        });

        var CAMPAIGN_ID;
        for(var key in campaigns) {
            CAMPAIGN_ID = key;
            break;
        }
      console.log($nome.val(),$email.val())
        jQuery.ajax({
            url     : api_url,
            data    : JSON.stringify({
                'jsonrpc'   : '2.0',
                'method'    : 'add_contact',
                'params'    : [
                    api_key,
                    {
                        'campaign'  : CAMPAIGN_ID,
                        'name'      : $nome.val(),
                        'email'     : $email.val(),
                    }
                ],
                'id'        : 2
            }),
            type        : 'POST',
            contentType : 'application/json',
            dataType    : 'JSON',
            crossDomain : true,
            async       : false,
            success     : function(response)
            {
                console.log(response)
                alert('Newsletter cadastrada com sucesso');
            }
        });

        return false;

    });
});