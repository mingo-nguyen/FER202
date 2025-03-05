import React, { useReducer, useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Card, Badge, InputGroup } from "react-bootstrap";
import { FaSearch, FaSort, FaPlus, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

// Import React Icons if not already installed
// npm install react-icons

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "START_EDIT":
      return { ...state, editingId: action.id };
    case "CANCEL_EDIT":
      return { ...state, editingId: null };
    case "UPDATE_ITEM":
      return {
        ...state,
        editingId: null,
        items: state.items.map((item) =>
          item.id === action.item.id ? action.item : item
        ),
      };
    case "SORT_ITEMS":
      return {
        ...state,
        sortBy: action.sortBy,
        items: [...state.items].sort((a, b) => {
          if (action.sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else if (action.sortBy === "time") {
            return a.id - b.id;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  editingId: null,
  sortBy: null,
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editItemName, setEditItemName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [animateIndex, setAnimateIndex] = useState(null);

  // Animation effect for newly added items
  useEffect(() => {
    if (animateIndex !== null) {
      const timer = setTimeout(() => setAnimateIndex(null), 500);
      return () => clearTimeout(timer);
    }
  }, [animateIndex]);

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
      setAnimateIndex(state.items.length);
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleStartEdit = (item) => {
    dispatch({ type: "START_EDIT", id: item.id });
    setEditItemName(item.name);
  };

  const handleCancelEdit = () => {
    dispatch({ type: "CANCEL_EDIT" });
    setEditItemName("");
  };

  const handleSaveEdit = (id) => {
    if (editItemName) {
      dispatch({
        type: "UPDATE_ITEM",
        item: { id, name: editItemName },
      });
      setEditItemName("");
    }
  };

  // Custom styles
  const styles = {
    header: {
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      color: "white",
      padding: "20px 0",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    card: {
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    newItem: {
      animation: "fadeIn 0.5s ease-out",
    },
    itemFadeIn: {
      animation: "fadeIn 0.5s ease-out",
    },
    emptyList: {
      padding: "30px 0",
      textAlign: "center",
      color: "#6c757d",
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mx-auto">
          {/* Header */}
          <div className="text-center mb-4" style={styles.header}>
            <h1>My Items Manager</h1>
            <p>Use the form below to manage your items.</p>
          </div>
          
          {/* Main Card */}
          <Card style={styles.card}>
            <Card.Body>
              {/* Add Item Form */}
              <Form onSubmit={(e) => { e.preventDefault(); handleAddItem(); }}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Add a new item..."
                    aria-label="New item"
                  />
                  <Button variant="primary" onClick={handleAddItem} disabled={!newItemName}>
                    <FaPlus className="me-1" /> Add Item
                  </Button>
                </InputGroup>
              </Form>

              {/* Search and Sort Controls */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <InputGroup style={{ width: '60%' }}>
                  <InputGroup.Text><FaSearch /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>

                <InputGroup style={{ width: '35%' }}>
                  <InputGroup.Text><FaSort /></InputGroup.Text>
                  <Form.Select
                    value={state.sortBy || ''}
                    onChange={(e) => {
                      const sortBy = e.target.value;
                      if (sortBy) {
                        dispatch({ type: "SORT_ITEMS", sortBy });
                      }
                    }}
                  >
                    <option value="">Sort by...</option>
                    <option value="name">Sort by Name</option>
                    <option value="time">Sort by Created Time</option>
                  </Form.Select>
                </InputGroup>
              </div>

              {/* Item List */}
              <div className="mt-4">
                <h5 className="mb-3">
                  Your Items 
                  <Badge bg="primary" className="ms-2">
                    {state.items.filter(item => 
                      item.name.toLowerCase().includes(searchTerm.toLowerCase())).length}
                  </Badge>
                </h5>
                
                {state.items.length === 0 ? (
                  <div style={styles.emptyList}>
                    <p>Your list is empty. Add some items to get started!</p>
                  </div>
                ) : (
                  <ListGroup variant="flush">
                    {state.items
                      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((item, index) => (
                        <ListGroup.Item
                          key={item.id}
                          className="d-flex justify-content-between align-items-center py-3"
                          style={index === animateIndex ? styles.itemFadeIn : {}}
                          variant={state.editingId === item.id ? "info" : ""}
                        >
                          {state.editingId === item.id ? (
                            <>
                              <Form.Control
                                type="text"
                                value={editItemName}
                                onChange={(e) => setEditItemName(e.target.value)}
                                autoFocus
                              />
                              <div>
                                <Button
                                  variant="success"
                                  size="sm"
                                  onClick={() => handleSaveEdit(item.id)}
                                  className="me-2"
                                  disabled={!editItemName}
                                >
                                  <FaSave className="me-1" /> Save
                                </Button>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  onClick={handleCancelEdit}
                                >
                                  <FaTimes className="me-1" /> Cancel
                                </Button>
                              </div>
                            </>
                          ) : (
                            <>
                              <span className="fs-5">{item.name}</span>
                              <div>
                                <Button
                                  variant="outline-primary"
                                  size="sm"
                                  onClick={() => handleStartEdit(item)}
                                  className="me-2"
                                >
                                  <FaEdit className="me-1" /> Edit
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <FaTrash className="me-1" /> Remove
                                </Button>
                              </div>
                            </>
                          )}
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;