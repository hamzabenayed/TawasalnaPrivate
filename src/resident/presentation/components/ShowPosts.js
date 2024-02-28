import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import Icon from "react-native-vector-icons/Entypo";
import { deviceWidth } from "./Dimensions ";
import Images from "../Utils/Images";
import CustomIcon from "./CustomIcon";
const ShowPosts = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        marginVertical: 5,
        paddingVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={item.profile_picture}
          style={{ borderRadius: 100, height: 60, width: 60, marginRight: 10 }}
        />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: Colors.BLACK }}
            >
              {item.name}
            </Text>
            {item.connection ? (
              <Text style={{ fontWeight: "bold" }}>
                <Icon name="dot-single" color={Colors.GRAY} size={16} />
                <Text>{item.connection}</Text>
              </Text>
            ) : null}
          </View>
          <Text style={{ width: 180 }} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={{ fontSize: 12 }}>{item.timeAgo} hr </Text>
        </View>
        {item.connection ? null : (
          <TouchableOpacity
            onPress={() => {}}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon name="plus" size={22} color={Colors.BLUE} />
            <Text
              style={{
                color: Colors.BLUE,
                fontSize: 19,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Follow
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {item.content ? (
        <Text
          style={{
            paddingHorizontal: 16,
            textAlign: "justify",
            color: Colors.BLACK,
            marginVertical: 10,
          }}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {item.content}
        </Text>
      ) : (
        <View style={{ marginTop: 10 }} />
      )}
      {item.hasImage ? (
        <Image
          source={item.postImage}
          style={{ height: 300, width: deviceWidth }}
        />
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 5,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={Images.LIKE}
            style={{ height: 25, width: 25, borderRadius: 100 }}
          />
          <Text>{item.likes}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {item.comments > 0 ? <Text>{item.comments}comments</Text> : null}
          {item.comments > 0 && item.shares > 0 ? (
            <Icon name="dot-single" size={16} color={Colors.GRAY} />
          ) : null}
          {item.shares > 0 ? <Text>{item.shares} shares</Text> : null}
        </View>
      </View>
      <View
        style={{
          borderTopColor: Colors.LIGHT_GRAY,
          borderTopWidth: 1,
          marginTop: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 40,
          paddingTop: 5,
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
          <Icon
            name="thumbs-up"
            size={22}
            color={item.isLiked ? Colors.BLUE : Colors.GRAY}
          />
          <Text style={{ color: item.isLiked ? Colors.BLUE : Colors.GRAY }}>
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
          <CustomIcon
            name="chatbubble-ellipses-outline"
            size={22}
            color={Colors.GRAY}
          />
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
          <Icon name="share" size={22} color={Colors.GRAY} />
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
          <CustomIcon name="send-outline" size={22} color={Colors.GRAY} />
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowPosts;
