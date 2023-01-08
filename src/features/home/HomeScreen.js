import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	screenNavigate(screen) {
		this.props.navigation.navigate(screen);
	}

	render() {
		return (
			<View style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
				padding: 10,
			}}>
				<TouchableOpacity
					onPress={() => {
						this.screenNavigate("NewWord");
					}}
					style={{
						width: "100%",
						borderWidth: 3,
						borderColor: "black",
						borderStyle: 'dashed',
						borderRadius: 10,
						margin: 10,
					}}>
					<Text style={{
						fontWeight: "bold",
						textAlign: 'center',
						color: "black",
						padding: 20,
					}}>Học từ mới</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: "100%",
						borderWidth: 3,
						borderColor: "black",
						borderStyle: 'dashed',
						borderRadius: 10,
						margin: 10,
						zIndex: 0,
					}}>
					<Text style={{
						fontWeight: "bold",
						textAlign: 'center',
						color: "black",
						padding: 20,
					}}>Làm bài tập</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default HomeScreen;
