'use strict';

// based on: https://github.com/isaacs/json-stringify-safe/blob/master/stringify.js

function jsonSerializer( replacer, cycleReplacer ) {
    const stack = [],
          keys = [];

    if ( !cycleReplacer ) {
        cycleReplacer = function( key, value ) {
            if ( stack[ 0 ] === value ) {
                return '[Circular ~]';
            }

            return '[Circular ~.' + keys.slice( 0, stack.indexOf( value ) ).join( '.' ) + ']';
        };
    }

    return function( key, value ) {
        
        if ( typeof value === 'function' ) {
            value = '[Fn]';
        }
        
        if ( stack.length > 0 ) {
            const thisPos = stack.indexOf( this );

            if ( ~thisPos ) {
                stack.length = thisPos + 1;
                keys.length = thisPos + 1;
                keys[thisPos] = key;
            } else {
                stack.push( this );
                keys.push( key );
            }

            if ( ~stack.indexOf( value ) ) {
                value = cycleReplacer.call( this, key, value );
            }
        } else {
            stack.push( value );
        }

        return ( !replacer ) ? value : replacer.call( this, key, value );
    };
}

function jsonStringify( obj, replacer, spaces, cycleReplacer ) {
    let result;
    
    try {
        result = JSON.stringify( obj, jsonSerializer( replacer, cycleReplacer ), spaces );
    } catch ( err ) {
        console.error( 'ERROR: jsonSafeStringify: ',  err );
    }
    
    return result;
}

exports = module.exports = jsonStringify;
exports.serializer = jsonSerializer;