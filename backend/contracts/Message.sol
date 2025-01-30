// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Messaging{
    struct Message{
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event MessageSent(address indexed sender, address indexed receiver, string content, uint256 timestamp);

    function sendMessage(address _receiver, string memory _content) public {
        messages.push(Message(msg.sender, _receiver, _content, block.timestamp));
        emit MessageSent(msg.sender, _receiver, _content, block.timestamp);
    }

    function getMessage() public view returns (Message[] memory){
        return messages;
    }
}