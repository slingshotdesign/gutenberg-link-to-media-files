/**
 * @see https://developer.wordpress.org/block-editor/how-to-guides/format-api/
 */

import { __ } from '@wordpress/i18n';

import {
    registerFormatType,
    toggleFormat,
} from '@wordpress/rich-text';

import { 
    BlockControls,
    MediaUpload,
    MediaUploadCheck,
} from '@wordpress/block-editor';

import { 
    ToolbarGroup, 
    ToolbarButton,
} from '@wordpress/components';

import {
    Icon
} from '@wordpress/icons';

import { 
    useState
} from '@wordpress/element';


const linkToMediaButton = ( { isActive, onChange, value } ) => {
    
    // Custom Media Icon
    const linkToMediaIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m19.67,9h-3.67v1.48h3.52v4.93l-1.19-1.15c-.18-.18-.43-.28-.69-.28-.29,0-.55.14-.7.36l-2.05,1.98-1.61-1.11c-.18-.12-.37-.18-.56-.18-.22,0-.42.09-.58.24l-1.59,1.14v-1.87h-1.54v5.13c0,.73.6,1.33,1.33,1.33h9.33c.73,0,1.33-.6,1.33-1.33v-9.33c0-.73-.6-1.33-1.33-1.33Zm-.14,10.52h-9.05v-1.28l2.28-1.67,1.73,1.09c.16.11.35.17.55.17.27,0,.51-.12.67-.32l1.97-1.92,1.86,1.8v2.12Zm-5.86-15.06h-3.93l-.4-.73c-.2-.47-.67-.73-1.2-.73h-3.8c-.73,0-1.33.6-1.33,1.33v7.87c0,.73.6,1.33,1.33,1.33h9.33c.73,0,1.33-.6,1.33-1.33v-6.4c0-.73-.6-1.33-1.33-1.33Zm-.17,7.57H4.5v-7.53h3.54l.8,1.47h4.66v6.07Z"/></svg>;
    
    const linkToMediaIconOff = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m19.67,9h-2.21l-1.46,1.46v.02h3.52v4.93l-1.19-1.15c-.18-.18-.43-.28-.69-.28-.29,0-.55.14-.7.36l-2.05,1.98-1.61-1.11c-.18-.12-.37-.18-.56-.18-.22,0-.42.09-.58.24l-3.13,2.21v2.2c0,.73.6,1.33,1.33,1.33h9.33c.73,0,1.33-.6,1.33-1.33v-9.33c0-.73-.6-1.33-1.33-1.33Zm-.14,10.52h-9.05v-1.28l2.28-1.67,1.73,1.09c.16.11.35.17.55.17.27,0,.51-.12.67-.32l1.97-1.92,1.86,1.8v2.12ZM3,12.2v-7.87c0-.73.6-1.33,1.33-1.33h3.8c.53,0,1,.27,1.2.73l.4.73h3.93c.73,0,1.33.6,1.33,1.33v1.42l-1.5,1.5v-2.75h-4.66l-.8-1.47h-3.54v7.53h5.69l-1.5,1.5h-4.36c-.73,0-1.33-.6-1.33-1.33Zm2.53,7.33l-.71-.71,14.24-14.26.71.71-14.24,14.26Z"/></svg>;
                    
    const onSelectMedia = (media) => {
        const linkTitle = media.alt ? media.alt : media.title;
        onChange(
            toggleFormat( value, {
                type: 'ss/link-to-media',
                attributes: {
                  'href': media.url,
                  'title': linkTitle,
                },
            } )
        );
	}

    return (
    <BlockControls>
        <ToolbarGroup>
            
            { ! isActive && (
            <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectMedia}
              //allowedTypes={['image']}
              //mode="upload"
              render={({ open }) => (
                <ToolbarButton
                  title="Link to media file"
                  //icon="admin-media"
                    icon={
                        <>
                            <Icon icon={ linkToMediaIcon } />
                        </>
                    }
                  onClick={open}
                  isActive={ isActive }
                />
              )}
            />
            </MediaUploadCheck>
            ) }
            
            { isActive && (
            <ToolbarButton
                //icon="admin-media"
                icon={
                    <>
                        <Icon icon={ linkToMediaIconOff } />
                    </>
                }
                title="Unlink media file"
                onClick={ () => {
                    onChange(
                        toggleFormat( value, {
                            type: 'ss/link-to-media',
                        } )
                    );
                } }
                isActive={ isActive }
            />
            ) }

        </ToolbarGroup>
      </BlockControls>
    );
};

registerFormatType( 'ss/link-to-media', {
    title: 'Link to media',
    tagName: 'a',
    className: 'link-to-media',
    edit: linkToMediaButton
} );

