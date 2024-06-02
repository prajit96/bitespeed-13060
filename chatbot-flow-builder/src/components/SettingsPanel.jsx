import React from 'react';
import "./Setting.css";

export const SettingPanel = ({ selectedNode, setNodes, setSelectedNode }) => {
  return (
    <div className="settings-panel">
      {selectedNode && (
        <div className="settings-content">
          <label>Message</label>
          <input
            type="text"
            value={selectedNode.data.text}
            onChange={(event) => {
              const newNode = {
                ...selectedNode,
                data: { ...selectedNode.data, text: event.target.value },
              };
              setNodes((nds) =>
                nds.map((node) =>
                  node.id === selectedNode.id ? newNode : node
                )
              );
              setSelectedNode(newNode);
            }}
          />
        </div>
      )}
    </div>
  );
};
